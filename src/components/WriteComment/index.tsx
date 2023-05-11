import { useNavigate } from "react-router-dom";
import { WhiteSection } from "../../pages/Product/styles";
import { WriteBox } from "./style";
import { SmallAvatar } from "../avatar/style";
import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaComment } from "../../validators";
import { ContextApi } from "../../contexts";
import { iFormComment } from "../../interfaces/User";


function WriteComment() {

  const navigate = useNavigate();
  const {user}= useContext(UserContext)
  const {makeComment}= useContext(ContextApi)

  const {register,handleSubmit,formState:{errors}} = useForm<iFormComment>({resolver:yupResolver(schemaComment)})
  
  return user && (
    <>
		<WhiteSection>
			<Flex alignItems="center" gap={'8px'}>
				<SmallAvatar>
					<div>{user.name[0].toUpperCase()}</div>
				</SmallAvatar>
				<h4>{user.name}</h4>
			</Flex>
			<WriteBox onSubmit={handleSubmit(makeComment)}>
				<textarea {...register("comment")} placeholder="Dê sua opinião"/>
				<span className="error-message">{errors.comment?.message}</span>
				<button className="btn btn-primary btn-medium">Comentar</button>
			</WriteBox>
		</WhiteSection>
    </>
  );
}

export default WriteComment;