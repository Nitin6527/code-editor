import React from "react";
import { Collaps } from "../collaps/Collaps";
import "./header.css";

const Header = ({ language }) => {
  return (
    <div className="header-box">
      <div>{language}</div>
      <Collaps />
    </div>
  );
};

export default Header;
