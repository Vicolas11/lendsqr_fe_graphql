import { resetUserData } from "../../store/slice/userdata.slice";
import styles from "../DashboardHeader/styles.module.scss";
import { setIsAuth } from "../../store/slice/auth.slice";
import { useAppDispatch } from "../../hooks/store.hook";
import { useNavigate } from "react-router-dom";
import { signoutIcon } from "../../assets";

export default function Logout(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.desktopLogout}
      onClick={() => {
        dispatch(setIsAuth(false));
        dispatch(resetUserData());
        navigate("/", { replace: true });
      }}
    >
      <img className={styles.signoutIcon} src={signoutIcon} alt="signout" />
      <h1>Logout</h1>
    </div>
  );
}
