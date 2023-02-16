import React, { type ReactNode } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";
import { FaCashRegister, FaChartLine, FaList } from "react-icons/fa";
import logo from '../../assets/images/logo-small-white.png';
import Image from "next/image";

type tProps = {
  children: ReactNode;
};

const menus = [
  {
    link: "/inventories",
    text: "Inventories",
    icon: <FaList className="pr-1" />,
  },
  {
    link: "#cashier",
    text: "Cashier",
    icon: <FaCashRegister className="pr-1" />,
  },
  { link: "#sales", text: "Sales", icon: <FaChartLine className="pr-1" /> },
  { link: "organization-profile", text: "Organization", icon: <FaChartLine className="pr-1" /> },
];

const ProtectedLayout: React.FC<tProps> = ({ children }) => {
  const renderMenus = () => menus.map((menu) => (
    <Link
      key={menu.link}
      href={menu.link}
      className="text-slate-50 hover:text-blue-500"
    >
      <div className="flex items-center">
        {menu.icon}{menu.text}
      </div>
    </Link>
  ));

  return (
    <div className="relative min-h-screen h-full w-full min-w-screen box-border">
      <nav className="flex flex-wrap sm:flex-nowrap justify-between p-4">
        <div className="flex items-center justify-start sm:w-48">
          <Image src={logo} alt="logo" width={192} height={192} />
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
        <div className="hidden sm:w-48 sm:flex justify-end">
          <UserButton />
        </div>
      </nav>
      <div className="menu  w-56  rounded-box pl-4">
          <div className="text-sm sm:flex-grow leading-7">
            {renderMenus()}
          </div>
        </div>
      <main className="container p-6 mx-auto">{children}</main>
      <div className="absolute bottom-1 left-1">copyright 2023</div>
    </div>
  );
};

export default ProtectedLayout;
