import Header from "../../components/header";
// import "./style.css";
import { Footer } from "../../components/footer";

import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import car from "../../img/carro_branco.png"
import {Article, Aside, Div, Figure, Main, Modal, SecondAside, DivDescription, SecondMain, Section,} from "./styles";
import Comment from "../../components/comment";
import { useState } from "react";
import  WriteComment from "../../components/WriteComment";

function Product() {
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	return (
		<>
		<Header></Header>
			<Section>
				<Article>
					<Main>
						<Figure onClick={() => setIsOpen(true)}>
							<img src={car} alt="" />
						</Figure>
						<Div>
							<h3>Mercedes Benz A 2000 CGI ADVANCE SEDAN Mercedes Benz A 200</h3>
							<div className="container-infos">
								<div className="priceAndSpan">
									<div className="span">
										<span>2013</span>
										<span>0 KM</span>
									</div>
									<div className="price">
										<p>R$ 00.000,00</p>
									</div>
								</div>
								<button className="btn btn-primary btn-medium">Comprar</button>
							</div>
						</Div>
						<DivDescription className="description">
							<h3>Descrição</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book.
							</p>
						</DivDescription>
						<Comment />
						<WriteComment />
					</Main>
					<SecondMain>
						<Aside>
							<div>
								<h3>Fotos</h3>
							</div>
							<div className="small-images">
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
								<img src={car} alt="" />
							</div>
						</Aside>
						<SecondAside>
							<h3>Samuel Leão</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s
							</p>
							<button>Ver todos anúncios</button>
						</SecondAside>
					</SecondMain>
				</Article>
			</Section>
			{isOpen && (
				<Modal
					id="wrapp"
					onClick={(e: React.MouseEvent<HTMLDivElement>) => {
						const target = e.target as HTMLButtonElement;
						if (target.id === "wrapp") {
							setIsOpen(false);
						}
					}}
				>
					<div className="modal-wrapper">
						<div className="modal-header">
							<h3>Mercedes Benz A 2000 CGI ADVANCE SEDAN</h3>
							<button onClick={() => setIsOpen(false)}>
								<IoClose />
							</button>
						</div>
						<div className="modal-img">
							<img src={car} alt="" />
						</div>
					</div>
				</Modal>
			)}
			<Footer />
		</>
	);
}

export default Product;



