import React, { type ReactNode } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";
import { FaCashRegister, FaChartLine, FaList } from "react-icons/fa";

type tProps = {
  children: ReactNode;
};

const menus = [
  {
    link: "#inventories",
    text: "Inventories",
    icon: <FaList className="pr-1" />,
  },
  {
    link: "#cashier",
    text: "Cashier",
    icon: <FaCashRegister className="pr-1" />,
  },
  { link: "#sales", text: "Sales", icon: <FaChartLine className="pr-1" /> },
];

const ProtectedLayout: React.FC<tProps> = ({ children }) => {
  const renderMenus = () => menus.map((menu) => (
    <Link
      key={menu.link}
      href={menu.link}
      className="mt-4 mr-4 block text-slate-50 hover:text-slate-200 sm:mt-0 sm:inline-block"
    >
      <div className="flex items-center">
        {menu.icon}{menu.text}
      </div>
    </Link>
  ));

  return (
    <div className="relative min-h-screen">
      <nav className="flex flex-wrap justify-between p-4">
        <div className="mr-6 flex items-center text-white">
          <svg
            className="mr-2 h-8 w-8 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight">Noushop</span>
        </div>
        <div className="block sm:hidden">
          <div className="flex">
            <button className="mr-2 flex items-center rounded border px-3 py-2 text-slate-50 hover:text-slate-200">
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            <UserButton />
          </div>
        </div>
        <div className="hidden w-full sm:flex sm:w-auto sm:items-center">
          <div className="text-sm sm:flex-grow">
            {renderMenus()}
          </div>
        </div>
        <div className="hidden sm:block">
          <UserButton />
        </div>
      </nav>
      <main className="container">{children}</main>
      <div className="absolute bottom-1 left-1">copyright 2023</div>
    </div>
  );
};

export default ProtectedLayout;
