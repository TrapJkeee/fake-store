import { Link } from "react-router-dom";
import GitHubSVG from "../../assets/svg/GitHubSVG";
import TelegramSVG from "../../assets/svg/TelegramSVG";
import "./FooterIcons.css";
const FooterIcon = () => {
  return (
    <div className="footer__icons">
      <Link to="https://github.com/TrapJkeee" className="footer__icon">
        <GitHubSVG />
      </Link>
      <Link to="https://t.me/trapjkeee" className="footer__icon">
        <TelegramSVG />
      </Link>
    </div>
  );
};

export default FooterIcon;
