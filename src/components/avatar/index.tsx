import { StyleAvatar } from "./style";
import { IAvatarProps } from "../../interfaces/Others";

const Avatar = ({ user, setOptionsOpen }: any) => {
  return (
    <StyleAvatar onClick={() => setOptionsOpen(true)}>
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
