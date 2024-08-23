import {
  setSearchTerm,
  setUserFilterData,
} from "../../store/slice/userdata.slice";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hook";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { searchData } from "../../utils/searchdata.util";
import { Link, useSearchParams } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import styles from "./styles.module.scss";
import Logout from "../Logout";
import {
  avatar,
  searchIcon,
  lendsqrLogo,
  dropDownArrowIcon,
  bellImgIcon,
} from "../../assets";

export default function DashboardHeader(): JSX.Element {
  const userDataArr = useAppSelector((state) => state.userData.data);
  const [searchValue, setSearchValue] = useState("");
  const setSearchParam = useSearchParams()[1];
  const dispatch = useAppDispatch();

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const handleOnSearch = () => {
    if (searchValue === "") return;
    const filteredDataArr = searchData(userDataArr, searchValue);
    dispatch(setUserFilterData(filteredDataArr));
    dispatch(setSearchTerm(searchValue));
    setSearchValue("");
    setSearchParam({ isSearch: "true" });
  };

  const handleOnKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      handleOnSearch();
    }
  };

  return (
    <header className={styles.dashHeaderWrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.logo}>
          <Link to={"/dashboard"}>
            <img src={lendsqrLogo} alt="logo" />
          </Link>
        </div>
        <div className={styles.searchWrapper}>
          <button
            className={styles.hamburger}
            onClick={() => setSearchParam({ sidebar: "true" })}
          >
            <HiOutlineMenuAlt2 className={styles.icon} />
          </button>
          <input
            type="text"
            value={searchValue}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            placeholder="Search for anything"
          />
          <div onClick={handleOnSearch}>
            <img src={searchIcon} alt="Search" />
          </div>
        </div>
      </div>

      <div className={styles.rightWrapper}>
        <span className={styles.docs}>
          <h1>Docs</h1>
        </span>
        <span className={styles.bell}>
          <img src={bellImgIcon} alt="bell" />
        </span>
        {/* Mobile Screen */}
        <span
          className={styles.mobileAvatar}
          onClick={() => setSearchParam({ modal: "true" })}
        >
          <img src={avatar} alt="avatar" />
        </span>
        {/* Larger Screen */}
        <span className={styles.avatar}>
          <img className={styles.avatarImg} src={avatar} alt="avatar" />
          <div className={styles.profileName}>
            <h3>Adedeji</h3>
            <img
              className={styles.dropDownArrowIcon}
              src={dropDownArrowIcon}
              alt="DropDownArrow"
            />
          </div>
          <Logout />
        </span>
      </div>
    </header>
  );
}
