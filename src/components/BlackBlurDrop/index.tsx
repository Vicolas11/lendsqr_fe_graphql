import { BackDropProps } from "../../interfaces/props.interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import animate from "../../styles/Animation.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.scss";
import { useRef } from "react";

export default function BackBlurDrop({ show, exit = 1000 }: BackDropProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={{ enter: 400, exit }}
      classNames={{
        enter: "",
        enterActive: animate.fadeEnterActive,
        exit: "",
        exitActive: animate.fadeExitActive,
      }}
    >
      <div
        onClick={() => {
          navigate(pathname, {});
        }}
        ref={nodeRef}
        className={styles.backDrop}
      ></div>
    </CSSTransition>
  );
}
