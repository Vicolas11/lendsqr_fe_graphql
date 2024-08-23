import { lendsqrLogo, pabloSignin } from "../../assets";
import LoginForm from "../../components/LoginForm";
import styles from "./styles.module.scss";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  useLayoutEffect(() => {
    document.title = "Lendsqr | Login";
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={lendsqrLogo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.pabloSiginContainer}>
          <img src={pabloSignin} alt="pablosignin" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={lendsqrLogo} alt="Logo" />
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
