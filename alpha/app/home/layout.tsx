import DashboardNavbar from "./_components/DashboardNavbar.tsx";
import Sidebar from "./_components/Sidebar";

export const metadata = {
  title: "Education",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex m-0 px-2 md:pr-4 md:px-2 w-full">
      <div className="hidden md:block md:w-1/4 lg:w-1/6 fixed overflow-y-auto">
        <Sidebar />
      </div>
      <div className="hidden md:block md:w-1/4 lg:w-1/6"></div>
      <div className="px-2 w-full md:3/4 lg:5/6 lg:pl-8">
        <DashboardNavbar />
        <main className="px-3">{children}</main>
      </div>
    </main>
  );
}
