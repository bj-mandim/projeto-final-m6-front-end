import { useNavigate } from "react-router-dom";
import Button from "../../components/button/style";
import { NotFoundDiv } from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/index";
import { toast } from "react-toastify";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <NotFoundDiv>
        <h1>PAGE NOT FOUND</h1>
        <Button
          onClick={() => {
            navigate("/");
            toast.success(`Você foi redirecionado com sucesso!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          Return to Home
        </Button>
      </NotFoundDiv>
      <Footer />
    </>
  );
}

export default PageNotFound;
