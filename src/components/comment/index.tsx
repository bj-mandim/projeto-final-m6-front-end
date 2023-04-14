import { useNavigate } from "react-router-dom";
import { Div } from "./style";


function Comment() {

  const navigate = useNavigate();
  
  return (
    <>
			<Div>
				<h3>Comentários</h3>
				<section>
					<div className="comment">
						
						<h4>Júlia Lima</h4>
						<span>Há 4 dias</span>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>	
				</section>
				<section>
					<div className="comment">
						{/* <img src={} alt="avatar" /> */}
						<h4>Marcos Antônio</h4>
						<span>Há 4 dias</span>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p>	
				</section>
                <section>
					<div className="comment">
						<h4>Camila Silva</h4>
						<span>Há 4 dias</span>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p>	
				</section>
			</Div>
    </>
  );
}

export default Comment;