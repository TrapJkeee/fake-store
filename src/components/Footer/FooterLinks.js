import { Link } from "react-router-dom";
import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <nav className="footer__links">
      <ul className="footer__links-body">
        <Link to="https://github.com/TrapJkeee" className="footer__link">
          GitHub
        </Link>
        <Link to="https://t.me/trapjkeee" className="footer__link">
          Telegram
        </Link>
      </ul>
    </nav>
  );
};

export default FooterLinks;
