import { setHasFetched } from "../../store/slice/userdata.slice";
import { useAppDispatch } from "../../hooks/store.hook";
import { useNavigate } from "react-router-dom";
import { arrowBackIcon } from "../../assets";
import styles from "./styles.module.scss";

export const ProfileNavigation = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBack = () => {
    dispatch(setHasFetched(false));
    navigate(-1);
  };

  return (
    <div className={styles.profileNavWrapper}>
      <div className={styles.backToUsers}>
        <span onClick={goBack}>
          <img src={arrowBackIcon} alt="backarrow" />
        </span>
        <h2>Back to Users</h2>
      </div>
      <div className={styles.innerWrapper}>
        <h1>User Details</h1>
        <div className={styles.btnWrapper}>
          <button className={styles.blacklistBtn}>Blacklist user</button>
          <button className={styles.activateBtn}>Activate user</button>
        </div>
      </div>
    </div>
  );
};
