import { eyeIcon, userActionIcon, userDeleteIcon } from "../../assets";
import { OptionModalProps } from "../../interfaces/props.interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { MouseEvent } from "react";

export default function UserOptionModal({
  arrayLen,
  index,
  username
}: OptionModalProps): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClickHandler = () => {
    navigate(`${pathname}/${username}`);
  };

  return (
    <div
      onClick={handleModalClick}
      className={`${styles.userOptionModal} ${
        arrayLen - 1 === index || arrayLen - 2 === index ? styles.lastRow : ""
      }`}
    >
      <div>
        <div onClick={onClickHandler}>
          <span>
            <img src={eyeIcon} alt="eye" />
          </span>
          <p>View Details</p>
        </div>
        <div>
          <span>
            <img src={userDeleteIcon} alt="user-delete" />
          </span>
          <p>Blacklist User</p>
        </div>
        <div>
          <span>
            <img src={userActionIcon} alt="user-activate" />
          </span>
          <p>Activate User</p>
        </div>
      </div>
    </div>
  );
}
