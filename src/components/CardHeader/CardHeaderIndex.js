import React from "react";
import DawRightSVG from "../../assets/svg/DawRightSVG";
import "./CardHeader.css";

const CardHeader = ({ title, text }) => {
  return (
    <div class="card-header">
      <div class="card-header__body">
        <div class="card-header__title">{title}</div>
        <div class="card-header__subtitle">
          <div class="card-header__subtitle-text">{text}</div>
          <DawRightSVG />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
