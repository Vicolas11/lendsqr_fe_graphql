import { IShowErrMsg } from "../../interfaces/hooks.interfaces";
import { isValidEmail } from "../../utils/validemail.util";
import { ChangeEvent, FormEvent, useState } from "react";
import { setIsAuth } from "../../store/slice/auth.slice";
import { useAppDispatch } from "../../hooks/store.hook";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const LoginForm = (): JSX.Element => {
  const [textInput, setTextInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [showErrMsg, setShowErrMsg] = useState<IShowErrMsg>({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    // Input value
    setTextInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error styling
    if (showErrMsg[name])
      setShowErrMsg((prev) => ({ ...prev, [name]: !showErrMsg[name] }));
  };

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { email, password } = textInput;

    // Validate for empty inputs
    if (email.length <= 0 && password.length <= 0) {
      setShowErrMsg({ email: true, password: true });
      return;
    }

    if (email.length <= 0 || !isValidEmail(email)) {
      setShowErrMsg((prev) => ({ email: true, password: prev.password }));
      return;
    }

    if (password.length <= 0) {
      setShowErrMsg((prev) => ({ email: prev.password, password: true }));
      return;
    }

    dispatch(setIsAuth(true));
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <form
        className={styles.loginForm}
        method="POST"
        onSubmit={onSubmitHandler}
      >
        <div className={styles.emailInputWrapper}>
          <input
            className={
              showErrMsg.email ? styles.errorInputStyle : styles.inputStyle
            }
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            value={textInput.email}
            onChange={handleOnChange}
          />
          {showErrMsg.email && <p className={styles.errMsg}>Enter a valid Email</p>}
        </div>
        <div className={styles.passwordInputWrapper}>
          <label
            htmlFor="password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </label>
          <input
            className={
              showErrMsg.password ? styles.errorInputStyle : styles.inputStyle
            }
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            placeholder="Password"
            value={textInput.password}
            onChange={handleOnChange}
          />
          {showErrMsg.password && (
            <p className={styles.errMsg}>Enter Password</p>
          )}
        </div>
        <h2 className={styles.forgetPassword}>
          <Link to={"/login"}>FORGET PASSWORD?</Link>
        </h2>
        <div className={styles.btnWrapper}>
          <button type="submit">LOG IN</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
