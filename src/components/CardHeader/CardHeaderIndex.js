import React from "react";
import DawRightSVG from "../../assets/svg/DawRightSVG";
import "./CardHeader.css";

const CardHeader = ({ title, text }) => {
  return (
    <div className="card-header">
      <div className="card-header__body">
        <div className="card-header__title">{title}</div>
        <div className="card-header__subtitle">
          <div className="card-header__subtitle-text">{text}</div>
          <DawRightSVG />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
