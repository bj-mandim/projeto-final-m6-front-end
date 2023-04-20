import { useNavigate } from "react-router-dom";
import Button from "../../components/button/style";
import { NotFoundDiv } from "./style";
import Header from "../../components/header";
import { Footer } from "../../components/footer/index";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <NotFoundDiv>
        <h1>PAGE NOT FOUND</h1>
        <Button onClick={() => navigate("/")}>Return to Home</Button>
      </NotFoundDiv>
      <Footer />
    </>
  );
}

export default PageNotFound;
