import DawSVG from "../../assets/svg/DawSVG";
import "./HeaderMenuUser.css";
const HeaderMenuUser = () => {
  return (
    <div className="header__user">
      <div className="header__user-img">
        <img src="../images/avatar.png" alt="avatar" />
      </div>
      <span className="header__user-name">Алексей</span>
      <span className="header__user-icon">
        <DawSVG />
      </span>
    </div>
  );
};

export default HeaderMenuUser;
