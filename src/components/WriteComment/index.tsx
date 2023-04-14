import { useNavigate } from "react-router-dom";
 import { Div } from "./style";

function WriteComment() {

  const navigate = useNavigate();
  
  return (
    <>
			<Div>
				<section>
					<div className="profile">
						{/* <img src={img} alt="" /> */}
						<h4>Samuel Leão</h4>
					</div>
					<div className="writer-box">
						<textarea placeholder="Carro muito confortável, foi uma ótima experiência de compra..."/>
						<button className="btn btn-primary btn-medium">Comentar</button>
					</div>
				</section>
			</Div>
    </>
  );
}

export default WriteComment;