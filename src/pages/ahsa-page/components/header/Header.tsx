import React from "react";
import LOGO from "../../ahsa-logo.png";
import NavItem from "./NavItem";
import NavSubItem from "./NavSubItem";

export default function Header() {
  return (
    <>
      <div className="h-40 bg-white">
        <div className="flex h-full py-4 container mx-auto">
          <div className="h-full flex-1">
            <img src={LOGO} alt="Ahsa logo" className="h-full " />
          </div>
          <div className="md:text-3xl lg:text-4xl xl:text-5xl font-semibold my-auto">
            <span className="text-ahsa-red">A</span>nnecy{" "}
            <span className="text-ahsa-red">H</span>aute-
            <span className="text-ahsa-red">S</span>avoie{" "}
            <span className="text-ahsa-red">A</span>thlétisme
          </div>
        </div>
      </div>
      <div className="bg-ahsa-red sticky top-0 flex">
        <div className="container mx-auto my-auto">
          <ul className="flex flex-wrap py-2 justify-between text-white uppercase">
            <NavItem text="Le club">
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
            </NavItem>
            <NavItem text="News" to="/news" />
            <NavItem text="AHSA étude">
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
            </NavItem>
            <NavItem text="Ecole d'athlé">
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
            </NavItem>
            <NavItem text="ATHLE COMPETITION CJESV">
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
            </NavItem>
            <NavItem text="Sections">
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
              <NavSubItem text="Histoire du club" />
            </NavItem>
            <NavItem text="Organisation" to="/news" />
            <NavItem text="Boutique" to="/news" />
            <NavItem text="Contact" to="/news" />
          </ul>
        </div>
      </div>
    </>
  );
}
