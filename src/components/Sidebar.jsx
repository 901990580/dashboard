import React, { useState } from "react";
import { GiTeacher } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaTh, FaBars, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // CSS faylini import qilish

function Sidebar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const menu = [
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/students", name: "Students", icon: <FaUserAlt /> },
    { path: "/teachers", name: "Teachers", icon: <GiTeacher /> },
    { path: "/groups", name: "Groups", icon: <MdGroups /> },
    { path: "/settings", name: "Settings", icon: <IoIosSettings /> },
  ];

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <div className="top_section">
        <h1 className={`dashboard ${open ? "visible" : "hidden"}`}>Dashboard</h1>
        <div className="bars" onClick={toggle} aria-label="Toggle sidebar">
          <FaBars />
        </div>
      </div>
      {menu.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <div className="icon">{item.icon}</div>
          <div className={`link_text ${open ? "visible" : "hidden"}`}>
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;