import GitHubSVG from "../../assets/svg/GitHubSVG";
import TelegramSVG from "../../assets/svg/TelegramSVG";
import "./FooterIcons.css";
const FooterIcon = () => {
  return (
    <div className="footer__icons">
      <span className="footer__icon">
        <GitHubSVG />
      </span>
      <span className="footer__icon">
        <TelegramSVG />
      </span>
    </div>
  );
};

export default FooterIcon;
