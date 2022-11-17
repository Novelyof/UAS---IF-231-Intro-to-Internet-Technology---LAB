import React from "react";
import { Link, useLocation } from "remix";
import { useAuth } from "~/context/auth";

type Menu = {
  label: string;
  link: string;
};

const Header: React.FC = () => {
  const menus: Menu[] = [
    {
      label: "News",
      link: "/",
    },
    {
      label: "Blogs",
      link: "/blogs",
    },
    {
      label: "Developer",
      link: "/developers",
    },
  ];
  let location = useLocation();
  let { state } = useAuth();
  return (
    <div className="px-4 py-4 md:px-8 flex justify-between">
      <p className="flex-1">
        {state.name !== "" ? `Welcome, ${state.name}` : null}
      </p>
      <nav>
        {menus.map((menu, idx) => (
          <Link
            key={idx}
            to={menu.link}
            className={
              "mr-4 last:mr-0 text-gray-300 px-4 py-1 rounded-md " +
              `${menu.link === location.pathname ? "bg-black text-white" : ""}`
            }
          >
            {menu.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
