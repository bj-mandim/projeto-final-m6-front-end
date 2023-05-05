import { useNavigate } from "react-router-dom";
import { Div } from "./style";
import { ContextApi } from "../../contexts";
import { useContext } from "react";

//Necessario arrumar as interfaces do ContextApi
interface iCardMaybe{
	card:{
		comments:{id:string ,user:{name:String}, created_at:String, comment:string}[]
	}

}

function Comment() {

  const navigate = useNavigate();
  const {card}:iCardMaybe = useContext(ContextApi)
  return (
    <>
		<Div>
			<h3>Comentários</h3>
			<ul>
				{card.comments.map(comment=>
					<section key={comment.id}>
	
							<div className="comment">
						
							<h4>{comment.user.name}</h4>
							<span>Criado em {comment.created_at.split(`T`)[0]}</span>
							</div>
							<p>{comment.comment}</p>	
				
					</section>
				)}
			</ul>
		</Div>
    </>
  );
}

export default Comment;