import { RiNotification3Line, RiInformationLine } from "react-icons/ri";
import Link from "next/link";

const DashboardNavbar = () => {
  const title = "Title";
  const noti = "Welcome back mf";

  return (
    <main className="flex justify-between py-2 mt-1 w-full bg-white border-b">
      <section className="pl-4">
        <p className="text-[0.6rem]">{noti}</p>
        <h1 className="text-lg">{title}</h1>
      </section>
      <section className="flex items-center pr-4">
        <button className="mx-2 text-gray-600">
          <RiNotification3Line />
        </button>
        <button className="ml-2 mr-4 text-gray-600">
          <RiInformationLine />
        </button>
        <a className="w-8 h-8 rounded-full bg-blue-500"></a>
      </section>
    </main>
  );
};

export default DashboardNavbar;
