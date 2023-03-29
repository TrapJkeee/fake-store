import GitHubSVG from "../../assets/svg/GitHubSVG";
import TelegramSVG from "../../assets/svg/TelegramSVG";
import "./FooterIcons.css";
const FooterIcon = () => {
  return (
    <div className="footer__icons">
      <a
        href="https://github.com/TrapJkeee"
        target="_blank"
        className="footer__icon"
      >
        <GitHubSVG />
      </a>
      <a href="https://t.me/trapjkeee" target="_blank" className="footer__icon">
        <TelegramSVG />
      </a>
    </div>
  );
};

export default FooterIcon;
