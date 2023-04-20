import { useContext } from "react";

import Header from "../../components/header";
import { Banner } from "../../components/banner";
import Filter from "../../components/filter";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import { Footer } from "../../components/footer";
import { ContextApi } from "../../contexts";

import { HomeContainer } from "./styles";

function Home() {
  const { listCards }: any = useContext(ContextApi);
  console.log(listCards);

  return (
    <>
      <Header/>

      <Banner/>
      
      <HomeContainer>
        <Filter/>
        <Card />
      </HomeContainer>

      <Pagination/>

      <Footer />
    </>
  );
}

export default Home;

// function Home() {
// 	const navigate = useNavigate();
// 	const [widthWindow, setWidthWindow] = useState<number>(window.innerWidth);
// 	const [openModal, setOpenModal] = useState(false);
// 	window.addEventListener("resize", function () {
// 		setWidthWindow(window.innerWidth);
// 	});

// 	return (
// 		<>
// 			<Main>
// 				{openModal && (
// 					<Modal>
// 							<>Filtros</>
// 							<button onClick={() => setOpenModal(false)}>
// 								X
// 							</button>
// 						</StyledModalTitle>

// 						<Filter />
// 						<div className="">
// 							<StyleButton??
// 								onClick={() => setOpenModal(false)}
// 							>
// 								Ver anúncios
// 							</StyleButton??>
// 						</div>
// 					</Modal>
// 				)}
// 				{widthWindow > 768 && <Filter />}
// 				<mockedcars />
// 				{widthWindow <= 768 && (
// 					<div className="">
// 						<Stylebutton?
// 							onClick={() => setOpenModal(true)}
// 						>
// 							Filtros
// 						</Styledbutton??>
// 					</div>
// 				)}
// 			</Main>
// 		</>
// 	);
// }

// export default Dashboard;
