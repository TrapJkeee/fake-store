import { Link } from "react-router-dom";
import "./HeaderSearchItems.css";
const HeaderSearchItems = ({ title, category, isInputFocus }) => {
  return (
    <li className="header__search-text">
      <Link to={`/${category}/${title}`} onClick={() => isInputFocus(false)}>
        {title}
      </Link>
    </li>
  );
};

export default HeaderSearchItems;
