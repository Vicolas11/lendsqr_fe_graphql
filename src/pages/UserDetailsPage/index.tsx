import { ProfileNavigation } from "../../components/ProfileNavigation";
import PersonalInformation from "../../components/PersonalInformation";
import GeneralUserDetails from "../../components/GeneralUserDetails";
import { useAppSelector } from "../../hooks/store.hook";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layout";
import styles from "./styles.module.scss";

export default function UserDetailsPage() {
  const params = useParams();
  const userDataArr = useAppSelector((state) => state.userData.data);
  const userDetails = userDataArr.find(
    (item) => item.profile.username === params.username
  );

  return (
    <DashboardLayout title="UserDetails">
      <div className={styles.userdetailsWrapper}>
        {!userDetails ? (
          <h2
            className={styles.notFound}
          >{`No Record Found for this username: ${params.username}`}</h2>
        ) : (
          <>
            <ProfileNavigation />
            <GeneralUserDetails userdetails={userDetails} />
            <PersonalInformation userdetails={userDetails} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
