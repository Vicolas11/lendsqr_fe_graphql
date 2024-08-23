import { UserDetailsProps } from "../../interfaces/props.interfaces";
import { formatToMoney } from "../../utils/formatmoney.utils";
import { navTitle } from "../../data/dashboardData";
import styles from "./styles.module.scss";
import {
  profileAvatarIcon,
  starFillIcon,
  starOutlineFillIcon,
} from "../../assets";

export default function GeneralUserDetails({
  userdetails,
}: UserDetailsProps): JSX.Element {
  const { profile, bankDetails } = userdetails;
  const { firstName, lastName, avatar, lendsqrId } = profile;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        <img
          key={i}
          src={i <= userdetails.userTier ? starFillIcon : starOutlineFillIcon}
          alt={i <= userdetails.userTier ? "star-fill" : "star-outline"}
        />
      );
    }
    return stars;
  };

  return (
    <div className={styles.generalDetailsWrapper}>
      <div className={styles.upper}>
        <div className={styles.profileName}>
          <span>
            <img src={avatar ? avatar : profileAvatarIcon} alt="avatar" />
          </span>
          <span className={styles.fullName}>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{lendsqrId}</p>
          </span>
        </div>
        <div className={styles.userTier}>
          <h2>User's Tier</h2>
          <span>{renderStars()}</span>
        </div>
        <div className={styles.amount}>
          <h1>₦{formatToMoney(bankDetails.accountBalance)}</h1>
          <p>
            {bankDetails.accountNumber}/{bankDetails.bank}
          </p>
        </div>
      </div>
      <div className={styles.below}>
        {navTitle.map((title, idx) => (
          <span key={idx}>
            <h2>{title}</h2>
          </span>
        ))}
      </div>
    </div>
  );
}
