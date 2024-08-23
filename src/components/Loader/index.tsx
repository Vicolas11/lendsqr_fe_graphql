import { PropagateLoader } from "react-spinners";
import styles from "./styles.module.scss";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <PropagateLoader color="#18425D" size={10} />
    </div>
  );
}
