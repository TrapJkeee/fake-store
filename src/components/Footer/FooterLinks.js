import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <nav className="footer__links">
      <ul className="footer__links-body">
        <a
          href="https://github.com/TrapJkeee"
          target="_blank"
          className="footer__link"
        >
          GitHub
        </a>
        <a
          href="https://t.me/trapjkeee"
          target="_blank"
          className="footer__link"
        >
          Telegram
        </a>
      </ul>
    </nav>
  );
};

export default FooterLinks;
