import { StyleAvatar } from "./style";

//Necessario refer a chava image_url em user
interface IAvatarProps {
	user: {
		name: string;
		image_url: string | null;
	};
}

const createImgName= (name:string)=>{
	const userName = name.split(" ")
	return `${userName[0][0].toUpperCase()}${userName.length>1?userName[userName.length-1][0].toUpperCase():userName[0][userName[0].length-1].toUpperCase()}`
}

const Avatar = ({ user }: IAvatarProps) => {
	return (
		<StyleAvatar>
			{user.image_url ? (
				<img src={user.image_url} alt={`${user.name}`} />
			) : (
				<div title={`${user.name}`}>{createImgName(user.name)}</div>
			)}
			<>{user.name}</>
		</StyleAvatar>
	);
};

export default Avatar;
