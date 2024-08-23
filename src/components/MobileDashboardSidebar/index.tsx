import { resetUserData } from "../../store/slice/userdata.slice";
import { useLocation, useNavigate } from "react-router-dom";
import { Props } from "../../interfaces/props.interfaces";
import { setIsAuth } from "../../store/slice/auth.slice";
import { useAppDispatch } from "../../hooks/store.hook";
import animate from "../../styles/Animation.module.css";
import { CSSTransition } from "react-transition-group";
import BackBlurDrop from "../BlackBlurDrop";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Businesses from "../Businesses";
import Customers from "../Customers";
import Settings from "../Settings";
import { useRef } from "react";
import {
  briefcaseIcon,
  dropDownIcon,
  homeIcon,
  lendsqrLogo,
  signoutIcon,
} from "../../assets";

export default function MobileDashboardSideBar({ show }: Props): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const dispatch = useAppDispatch();

  return (
    <>
      <BackBlurDrop show={show} exit={1000} />
      <CSSTransition
        in={show}
        key={"enter"}
        nodeRef={nodeRef}
        timeout={400}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: animate.slideEnterActive,
          exitActive: animate.slideExitActive,
        }}
      >
        <aside className={styles.mobileDashboardSidebarWrapper} ref={nodeRef}>
          <div className={styles.container}>
            <div
              className={styles.close}
              onClick={() => navigate(pathname, { replace: false })}
            >
              <MdClose className={styles.mdCloseIcon} />
            </div>
            <Link to={pathname}>
              <img className={styles.logo} src={lendsqrLogo} alt="Logo" />
            </Link>
            <div className={styles.switchOrganisation}>
              <span>
                <img src={briefcaseIcon} alt="Briefcase" />
              </span>
              <span className={styles.text}>
                <h3>Switch Organization</h3>
                <img src={dropDownIcon} alt="DropDown" />
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
          </div>
        </aside>
      </CSSTransition>
    </>
  );
}
