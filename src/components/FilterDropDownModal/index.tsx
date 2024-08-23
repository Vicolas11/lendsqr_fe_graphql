import { useAppDispatch, useAppSelector } from "../../hooks/store.hook";
import { DropdownModalProps } from "../../interfaces/props.interfaces";
import { setUserFilterData } from "../../store/slice/userdata.slice";
import { useRef, MouseEvent, useState, ChangeEvent } from "react";
import { IInputValue } from "../../interfaces/status.interface";
import { filteredData } from "../../utils/filterdata.util";
import { dropdownInput } from "../../data/dashboardData";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";

export default function FilterDropDownModal({
  arrayLen,
  index,
  close,
  isFilter,
}: DropdownModalProps): JSX.Element {
  const userDataArr = useAppSelector((state) => state.userData.data);
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchParams = useSearchParams()[1];
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<IInputValue>({
    organization: "",
    email: "",
    username: "",
    phone: "",
    status: "",
    date: "",
  });

  const handleOnChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = evt.target;
    setInputValue((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleOnFilter = () => {
    const filteredDataArr = filteredData({ data: userDataArr, ...inputValue });
    dispatch(setUserFilterData(filteredDataArr));
    setSearchParams({ isFilter: "true" });
    close && close();
  };

  const handleOnReset = () => {
    const entryArr = Object.keys(inputValue).map((d) => [d, ""]);
    setInputValue(Object.fromEntries(entryArr));
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const disabled = Object.values(inputValue).every((val) => val === "");

  return (
    <div
      onClick={handleModalClick}
      className={`${styles.filterDropdownWrapper} ${
        arrayLen - 1 === index ? styles.lastColumn : ""
      } ${isFilter ? styles.isFilter : ""}`}
    >
      <form>
        <div className={styles.selectWrapper}>
          <label htmlFor="organization">Organisation</label>
          <select
            name="organization"
            id="organization"
            value={inputValue.organization}
            onChange={handleOnChange}
          >
            <option value="" className={styles.first}>
              Select
            </option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
        </div>
        {dropdownInput.map(({ label, type, name }, idx) => (
          <div className={styles.inputWrapper} key={idx}>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={label}
              ref={name === "date" ? inputRef : null}
              onFocus={
                name === "date"
                  ? () => (inputRef.current!.type = "date")
                  : () => {}
              }
              onBlur={
                name === "date"
                  ? () => {
                      inputRef.current!.type = "date";
                      inputRef.current!.style.background = "none";
                    }
                  : () => {}
              }
              value={inputValue[name]}
              onChange={handleOnChange}
            />
          </div>
        ))}
        <div className={styles.selectWrapper}>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={inputValue.status}
            onChange={handleOnChange}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className={styles.btnWrapper}>
          <button
            type="button"
            disabled={disabled}
            className={styles.resetBtn}
            onClick={handleOnReset}
          >
            Reset
          </button>
          <button
            type="button"
            disabled={disabled}
            className={styles.filterBtn}
            onClick={handleOnFilter}
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
}
