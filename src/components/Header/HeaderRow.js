import HeaderLogo from "./HeaderLogo";
import HeaderCatalog from "./HeaderCatalog";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuButtonAuth from "./HeaderMenuButtonAuth";
import HeaderMenuUser from "./HeaderMenuUser";
import Container from "../UI/Container";
import "./HeaderRow.css";

const HeaderRow = () => {
  return (
    <Container>
      <div className="header__row">
        <HeaderLogo />
        <HeaderCatalog />
        <HeaderSearch />
        <HeaderMenu />
        <HeaderMenuButtonAuth />
        <HeaderMenuUser />
      </div>
    </Container>
  );
};

export default HeaderRow;
