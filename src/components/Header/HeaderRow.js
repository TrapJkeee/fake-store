import HeaderLogo from "./HeaderLogo";
import HeaderCatalog from "./HeaderCatalog";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuButtonAuth from "./HeaderMenuButtonAuth";
import HeaderMenuUser from "./HeaderMenuUser";
import Container from "../UI/Container";
import "./HeaderRow.css";
import { useSelector } from "react-redux";

const HeaderRow = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <Container>
      <div className="header__row">
        <HeaderLogo />
        <HeaderCatalog />
        <HeaderSearch />
        <HeaderMenu />
        {isLogin ? <HeaderMenuUser /> : <HeaderMenuButtonAuth />}
      </div>
    </Container>
  );
};

export default HeaderRow;
