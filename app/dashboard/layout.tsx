import DashboardBreadCrumbs from "../ui/dashboard/DashboardBreadCrumbs";
import DashboardNavDesktop from "../ui/dashboard/DashboardNavDesktop";
import DashboardNavMobile from "../ui/dashboard/DashboardNavMobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-[calc(100vh-80px)] flex-row md:flex-row md:overflow-hidden">
      <DashboardNavDesktop />
      <DashboardNavMobile />
      <div className="w-screen md:w-[calc(100vw-240px)] lg:w-[calc(100vw-268px)]">
        <DashboardBreadCrumbs />
        <div className="w-full h-[calc(100vh-120px)]">{children}</div>
      </div>
    </div>
  );
}
