import Container from "../UI/Container";
import logo from "../../assets/logo.png";

import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import "./FooterRow.css";

const FooterRow = () => {
  return (
    <Container>
      <div className="footer__row">
        <img src={logo} alt="logo" className="footer__logo" />
        <FooterLinks />
        <FooterIcons />
      </div>
    </Container>
  );
};

export default FooterRow;
