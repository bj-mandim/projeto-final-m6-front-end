import { useNavigate } from "react-router-dom";
import { Div } from "./style";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import moment from "moment";
import "moment/locale/pt-br";

//Necessario arrumar as interfaces do ContextApi
interface iCardMaybe {
  card: {
    comments: {
      id: string;
      user: { name: String };
      created_at: any;
      comment: string;
    }[];
  };
}

function Comment() {
  const navigate = useNavigate();
  const { card }: iCardMaybe = useContext(ContextApi);
  return (
    <>
      <Div>
        <h3>Comentários</h3>
        <ul>
          {card.comments.map((comment) => (
            <section key={comment.id}>
              <div className="comment">
                <h4>{comment.user.name}</h4>
                <span>{moment(new Date(comment.created_at)).fromNow()}</span>
              </div>
              <p>{comment.comment}</p>
            </section>
          ))}
        </ul>
      </Div>
    </>
  );
}

export default Comment;
