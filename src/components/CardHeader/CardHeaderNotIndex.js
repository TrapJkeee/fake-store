import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import DawRightSVG from "../../assets/svg/DawRightSVG";
import "./CardHeader.css";

const CardHeaderNotIndex = () => {
  const location = useLocation();
  const params = useParams();

  if (location.pathname === "/catalog") {
    return (
      <div className="card-header">
        <div className="card-header__body card-header__body_chain">
          <div className="card-header__subtitle">
            <div className="card-header__subtitle-text">Каталог</div>
          </div>
        </div>
      </div>
    );
  }

  if (params.title) {
    return (
      <div className="card-header">
        <div className="card-header__body card-header__body_chain">
          <div className="card-header__subtitle">
            <Link to="/catalog" className="card-header__subtitle-text">
              Каталог
            </Link>
            <DawRightSVG />
          </div>
          <div className="card-header__subtitle">
            <Link
              to={`/category/${params.category}`}
              className="card-header__subtitle-text"
            >
              {params.category}
            </Link>
            <DawRightSVG />
          </div>
          <div className="card-header__subtitle">
            <div className="card-header__subtitle-text">{params.title}</div>
          </div>
        </div>
      </div>
    );
  }
  if (params.category)
    return (
      <div className="card-header">
        <div className="card-header__body card-header__body_chain">
          <div className="card-header__subtitle">
            <Link to="/catalog" className="card-header__subtitle-text">
              Каталог
            </Link>
            <DawRightSVG />
          </div>

          <div className="card-header__subtitle">
            <div className="card-header__subtitle-text">{params.category}</div>
          </div>
        </div>
      </div>
    );
  if (location.pathname === "/order")
    return (
      <div className="card-header">
        <div className="card-header__body card-header__body_chain">
          <div className="card-header__subtitle">
            <Link to="/catalog" className="card-header__subtitle-text">
              Каталог
            </Link>
            <DawRightSVG />
          </div>

          <div className="card-header__subtitle">
            <div className="card-header__subtitle-text">Заказы</div>
          </div>
        </div>
      </div>
    );
};

export default CardHeaderNotIndex;
