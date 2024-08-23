import { dashData } from "../../data/dashboardData";
import styles from "./styles.module.scss";

export default function CardBoxes(): JSX.Element {
  return (
    <>
      {dashData[3]?.main?.map((data) => {
        return (
          <div key={`${data?.id}`} className={styles.cardBox}>
            <img src={data?.icon} alt={data?.alt} />
            <h3>{data?.title}</h3>
            <h1>{data?.value.toLocaleString()}</h1>
          </div>
        );
      })}
    </>
  );
}
