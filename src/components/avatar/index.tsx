import { StyleAvatar } from "./style";

interface IAvatarProps {
	user: {
		name: string;
		image_url: string | null;
	};
}

const Avatar = ({ user }: IAvatarProps) => {
	return (
		<StyleAvatar>
			{user.image_url ? (
				<img src={user.image_url} alt="" />
			) : (
				<div>{user.name[0].toUpperCase()}</div>
			)}
			<>{user.name}</>
		</StyleAvatar>
	);
};

export default Avatar;
