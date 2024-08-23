import { InitData, IGuarantorData } from "../../interfaces/userdata.interface";
import { UserDetailsProps } from "../../interfaces/props.interfaces";
import { UserDataFunc } from "../../data/dashboardData";
import styles from "./styles.module.scss";

export default function PersonaInformation({ userdetails }: UserDetailsProps) {
  const userData = UserDataFunc(userdetails);

  return (
    <div className={styles.personalInfoWrapper}>
      {userData.map((_, index) => {
        const element = userData[index];
        const { title, data } = element;
        return (
          <div key={`${index}`}>
            <h3>{title}</h3>
            {title === "Guarantor" ? (
              <div className={styles.gurantorWrapper}>
                {data.map((_, idx) => {
                  const temp = data[idx] as IGuarantorData;
                  const { gurantor } = temp;
                  return (
                    <div key={`${idx}`}>
                      {gurantor.map((item, idx) => {
                        const { subtitle, value } = item;
                        return (
                          <span key={`${idx}`}>
                            <p>{subtitle}</p>
                            <h2>{value}</h2>
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.innerWrapper}>
                {data.map((info, idx) => {
                  const newInfo = info as InitData;
                  const { subtitle, value } = newInfo;
                  return (
                    <span key={`${idx}`}>
                      <p>{subtitle}</p>
                      <h2>{value}</h2>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
