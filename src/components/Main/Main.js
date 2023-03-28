import Container from "../UI/Container";
import "./Main.css";
const Main = ({ children }) => {
  return (
    <main className="main">
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
