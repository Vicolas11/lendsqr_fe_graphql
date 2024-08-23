import { CustomButtonProps } from "../../../interfaces/props.interfaces";
import { PuffLoader } from "react-spinners";
import styles from "./styles.module.scss";

export default function CustomButton({
  title,
  xtraStyle,
  isOutline = false,
  showLoader = false,
  isDeleteBtn,
  ...rest
}: CustomButtonProps) {
  return (
    <button
      className={`${isOutline ? styles.btnOutline : styles.btn} ${xtraStyle}`}
      {...rest}
    >
      {showLoader && (
        <PuffLoader color={isDeleteBtn ? "#ffffff" : "#18425D"} size={20} />
      )}
      {`${title}${showLoader ? "..." : ""}`}
    </button>
  );
}
