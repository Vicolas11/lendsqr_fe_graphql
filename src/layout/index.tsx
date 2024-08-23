import MobileDashboardSidebar from "../components/MobileDashboardSidebar";
import DashboardSidebar from "../components/DashboardSidebar";
import { LayoutProps } from "../interfaces/props.interfaces";
import DashboardHeader from "../components/DashboardHeader";
import LogoutModal from "../components/LogoutModal";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { useLayoutEffect } from "react";

export default function DashboardLayout({
  title,
  children,
}: LayoutProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const logoutModal = searchParams.get("modal");
  const sidebarModal = searchParams.get("sidebar");

  useLayoutEffect(() => {
    document.title = `Lendsqr | ${title}`;
  }, [title]);

  return (
    <>
      {logoutModal && <LogoutModal show={!!logoutModal} />}
      <MobileDashboardSidebar show={!!sidebarModal} />
      <div className={styles.layout}>
        <DashboardHeader />
        <div className={styles.layoutInnerWrapper}>
          <DashboardSidebar />
          <main className={styles.layoutMain}>{children}</main>
        </div>
      </div>
    </>
  );
}
