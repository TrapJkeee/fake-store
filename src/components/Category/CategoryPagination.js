import DawLeftSVG from "../../assets/svg/DawLeftSVG";
import DawRightSVG from "../../assets/svg/DawRightSVG";
import CategoryPaginationNumber from "./CategoryPaginationNumber";
import "./CategoryPagination.css";
const CategoryPagination = () => {
  return (
    <div className="category__group-pagination">
      <DawLeftSVG />
      <CategoryPaginationNumber />
      <DawRightSVG />
    </div>
  );
};

export default CategoryPagination;
