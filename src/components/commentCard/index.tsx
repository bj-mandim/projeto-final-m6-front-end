import { useContext, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { CarsContext } from "../../contexts/carsContext";
import { UserContext } from "../../contexts/userContext";
import { CommentWrapper } from "./style";
import { schemaComment } from "../../validators";
import { iFormComment } from "../../interfaces/User";
import Button from "../button/style";
import { SmallAvatar } from "../avatar/style";
import { Flex } from "@chakra-ui/react";

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
    <CommentWrapper>
      
      {edit ? (
        <>
          <Flex alignItems="center" gap={'8px'} className="comment-profile">
            <SmallAvatar>
            <div>{comment.user.name[0].toUpperCase()}</div>
            </SmallAvatar>
            <h4 className="profile-name">{comment.user.name}</h4>
            <span className="profile-timeline">{moment(new Date(comment.created_at)).fromNow()}</span>
          </Flex>

          <form onSubmit={handleSubmit(handleUpdateComment)}>
            <input type="text" value={editField}
              {...register("comment")}
              onChange={(e) => setEditField(e.target.value)}></input>
            <span className="error-message">{errors.comment?.message}</span>

            {comment.user.id == user?.id && (
              <Flex alignItems="center" justifyContent="end" gap={'8px'} style={{ marginTop: 16 }}>
                <button type="submit" className="btn btn-primary btn-medium">Alterar</button>
                <a className="btn btn-primary-opacity btn-small" onClick={handleUpdateClick}><IoClose /></a>
              </Flex>
            )}
          </form>
        </>
      ) : (
        <>
          <Flex alignItems="center" justifyContent="space-between" className="comment-profile flex-direction-mob">
            <Flex alignItems="center" gap={'8px'}>
              <SmallAvatar>
              <div>{comment.user.name[0].toUpperCase()}</div>
              </SmallAvatar>
              <h4 className="profile-name">{comment.user.name}</h4>
              <span className="profile-timeline">{moment(new Date(comment.created_at)).fromNow()}</span>
            </Flex>

            {comment.user.id == user?.id && (
              <Flex alignItems="center" justifyContent="end" gap={'8px'}>
                <a className="btn btn-primary btn-small" onClick={handleUpdateClick}><FaPencilAlt /></a>
                <a className="btn btn-small btn-alert" onClick={() => deleteComment(comment.id)}><FaTrashAlt /></a>
              </Flex>
            )}
          </Flex>

          <p>{comment.comment}</p>
        </>
      )}
    </CommentWrapper>
  );
}
