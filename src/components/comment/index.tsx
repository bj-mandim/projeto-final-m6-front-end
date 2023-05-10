import { Div } from "./style";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import { CommentCard } from "../commentCard";

//Necessario arrumar as interfaces do ContextApi
interface iCardMaybe {
  card: {
    comments: iComment[];
  };
}

interface iComment {
  id: string;
  user: { name: String; id: string };
  created_at: any;
  comment: string;
}

export function Comment() {
  const { card }: iCardMaybe = useContext(ContextApi);
  return (
    <>
      <Div>
        <h3>Comentários</h3>
        <ul>
          {card.comments.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })}
        </ul>
      </Div>
    </>
  );
}
