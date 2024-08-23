import { resetUserData } from "../../store/slice/userdata.slice";
import { avatar, lendsqrLogo, signoutIcon } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { Props } from "../../interfaces/props.interfaces";
import { setIsAuth } from "../../store/slice/auth.slice";
import { useAppDispatch } from "../../hooks/store.hook";
import BackBlurDrop from "../BlackBlurDrop";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { BsBell } from "react-icons/bs";
import { useRef } from "react";

export default function LogoutModal({ show }: Props): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const nodeRef = useRef(null);
  const dispatch = useAppDispatch();

  return (
    <>
      <BackBlurDrop show={show} exit={1000} />

      <div className={styles.logoutModal} ref={nodeRef}>
        <span className={styles.modalHeader}>
          <div className={styles.logo}>
            <img src={lendsqrLogo} alt="Logo" />
          </div>
          <div
            className={styles.close}
            onClick={() => navigate(pathname, { replace: true })}
          >
            <MdClose className={styles.mdCloseIcon} />
          </div>
        </span>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
          <div className={styles.profile_name}>
            <h3>Adedeji Paul</h3>
            <p>adedeji@email.com</p>
          </div>
        </div>
        <div className={styles.docs}>
          <SlDocs className={styles.icon} />
          <h1>Docs</h1>
        </div>
        <div className={styles.bell}>
          <BsBell className={styles.icon} />
          <h1>Notifications</h1>
        </div>
        <div
          className={styles.logout}
          onClick={() => {
            dispatch(setIsAuth(false));
            dispatch(resetUserData());
            navigate("/", { replace: true });
          }}
        >
          <img src={signoutIcon} alt="signout" />
          <h1>Logout</h1>
        </div>
      </div>
    </>
  );
}
