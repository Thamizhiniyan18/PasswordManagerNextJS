import DashboardBreadCrumbs from "../ui/dashboard/DashboardBreadCrumbs";
import DashboardNav from "../ui/dashboard/DashboardNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-[calc(100vh-80px)] flex-row md:flex-row md:overflow-hidden">
      <DashboardNav />
      <div className="md:w-[calc(100vw-240px)] lg:w-[calc(100vw-268px)] h-full">
        <DashboardBreadCrumbs />
        {children}
      </div>
    </div>
  );
}
