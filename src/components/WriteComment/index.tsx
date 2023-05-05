import { useNavigate } from "react-router-dom";
 import { Div } from "./style";
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
			<Div>
				<section>
					<div className="profile">
						<h4>{user.name}</h4>
					</div>
					<form className="writer-box" onSubmit={handleSubmit(makeComment)}>
						<textarea {...register("comment")} placeholder="Dê sua opinião"/>
						<span>{errors.comment?.message}</span>
						<button className="btn btn-primary btn-medium">Comentar</button>
					</form>
				</section>
			</Div>
    </>
  );
}

export default WriteComment;