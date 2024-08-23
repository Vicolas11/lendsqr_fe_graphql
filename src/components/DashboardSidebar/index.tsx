import { resetUserData } from "../../store/slice/userdata.slice";
import { setIsAuth } from "../../store/slice/auth.slice";
import { useAppDispatch } from "../../hooks/store.hook";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Businesses from "../Businesses";
import Customers from "../Customers";
import Settings from "../Settings";
import {
  briefcaseIcon,
  dropDownIcon,
  homeIcon,
  signoutIcon,
} from "../../assets";

export default function DashboardSidebar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <aside className={styles.dashboardSidebarWrapper}>
      <div className={styles.switchOrganisation}>
        <span>
          <img src={briefcaseIcon} alt="Briefcase" />
        </span>
        <span className={styles.text}>
          <h3>Switch Organization</h3>
          <img
            className={styles.dropdownIcon}
            src={dropDownIcon}
            alt="DropDown"
          />
        </span>
      </div>
      <div className={styles.dashboard}>
        <span>
          <img src={homeIcon} alt="home" />
        </span>
        <h3>Dashboard</h3>
      </div>
      <Customers />
      <Businesses />
      <Settings />
      <div
        className={styles.logout}
        onClick={() => {
          dispatch(setIsAuth(false));
          dispatch(resetUserData());
          navigate("/", { replace: true });
        }}
      >
        <span>
          <img src={signoutIcon} alt="signout" />
        </span>
        <h3>Logout</h3>
      </div>
      <h2 className={styles.version}>v1.2.0</h2>
    </aside>
  );
}
