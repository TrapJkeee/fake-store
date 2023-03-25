import React from "react";
import DawRightSVG from "../../assets/svg/DawRightSVG";
import "./CardHeader.css";

const CardHeaderNotIndex = () => {
  return (
    <div class="card-header">
      <div class="card-header__body card-header__body_chain">
        <div class="card-header__subtitle">
          <div class="card-header__subtitle-text">Главная</div>
          <DawRightSVG />
        </div>
        <div class="card-header__subtitle">
          <div class="card-header__subtitle-text">Каталог</div>
        </div>
      </div>
    </div>
  );
};

export default CardHeaderNotIndex;
