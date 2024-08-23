import { dashData } from "../../data/dashboardData";
import styles from "./styles.module.scss";

const Customers = (): JSX.Element => {
  return (
    <>
      <h3>customers</h3>
      <ul>
        {dashData[0]?.customers?.map((data) => (
          <li
            key={`${data?.id}`}
            className={data.title === "Users" ? styles.active : ""}
          >
            <span>
              <img src={data?.icon} alt={data?.alt} />
            </span>
            <h3>{data?.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Customers;
