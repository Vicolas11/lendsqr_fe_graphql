import styles from './styles.module.scss';
import CardBoxes from '../CardBoxes';
import Table from '../Table';

export default function DashboardMain(): JSX.Element {
  return (
    <div className={styles.dashMainWrapper}>
      <p>Users</p>
      <div className={styles.cardBoxWrapper}>
        <CardBoxes />
      </div>
      <Table />
    </div>
  );
}
