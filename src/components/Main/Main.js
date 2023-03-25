import Articles from "../Article/Articles";
import ProductsOnIndex from "../Product/ProductsOnIndex";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <ProductsOnIndex />
        <Articles />
      </div>
    </main>
  );
};

export default Main;
