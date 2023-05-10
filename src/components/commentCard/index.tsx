import { useContext, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { CarsContext } from "../../contexts/carsContext";
import { UserContext } from "../../contexts/userContext";
import { Section } from "./style";
import { schemaComment } from "../../validators";
import { iFormComment } from "../../interfaces/User";
import Button from "../button/style";

interface iComment {
  id: string;
  user: { name: String; id: string };
  created_at: any;
  comment: string;
}

interface iCommentCardProps {
  comment: iComment;
}

export function CommentCard({ comment }: iCommentCardProps) {
  const { updateComment, deleteComment } = useContext(CarsContext);
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iFormComment>({ resolver: yupResolver(schemaComment) });
  const [edit, setEdit] = useState(false);
  const [editField, setEditField] = useState(comment.comment);

  function handleUpdateComment(info: any) {
    updateComment(comment.id, info);
    setEdit(!edit);
  }

  function handleUpdateClick() {
    setValue("comment", comment.comment);
    setEdit(!edit);
  }

  return (
    <Section>
      <div className="comment">
        <h4>{comment.user.name}</h4>
        <span>{moment(new Date(comment.created_at)).fromNow()}</span>
      </div>
      {edit ? (
        <form onSubmit={handleSubmit(handleUpdateComment)}>
          <textarea
            value={editField}
            {...register("comment")}
            onChange={(e) => setEditField(e.target.value)}
          />
          <span>{errors.comment?.message}</span>
          <Button medium model="model-6">
            Alterar
          </Button>
        </form>
      ) : (
        <p>{comment.comment}</p>
      )}

      {comment.user.id == user?.id && (
        <div className="options--buttons">
          <Button model="model-5" onClick={handleUpdateClick}>
            {edit ? <IoClose /> : <FaPencilAlt />}
          </Button>
          <Button model="model-5" onClick={() => deleteComment(comment.id)}>
            <FaTrashAlt />
          </Button>
        </div>
      )}
    </Section>
  );
}
