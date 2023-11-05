import DashboardNav from "../ui/dashboard/DashboardNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-row md:flex-row md:overflow-hidden w-screen">
      <DashboardNav />
      <div className="w-[calc(100vw-228px)] h-full p-">{children}</div>
    </div>
  );
}
