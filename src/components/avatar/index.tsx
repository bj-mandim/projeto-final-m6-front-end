import { StyleAvatar } from "./style";
import { IAvatarProps } from "../../interfaces/Others";

const Avatar = ({ user, setOptionsOpen }: any) => {
  return (
    <StyleAvatar onClick={() => setOptionsOpen(true)}>
      {user && user.image_url? (
        <img src={user.image_url} alt="" />
      ) : (
        <div>{user && user.name[0].toUpperCase()}</div>
      )}
      <>{user && user.name}</>
    </StyleAvatar>
  );
};

export default Avatar;
