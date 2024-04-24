import React from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";

const Sidebar = () => {
  return <div className="sidebar">
    <div className="bg">
      <Links/>
    </div>
    <ToggleButton/>
  </div>;
};

export default Sidebar;
