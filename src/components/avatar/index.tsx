import { StyleAvatar } from "./style";

interface IAvatarProps {
  user: {
    name: string;
    image_url: string | null;
  };
}

const Avatar = ({ user, setOptionsOpen }: any) => {
  return (
    <StyleAvatar>
      {user.image_url ? (
        <img
          onClick={() => setOptionsOpen(true)}
          src={user.image_url}
          alt="img_user"
        />
      ) : (
        <div>{user.name[0].toUpperCase()}</div>
      )}
      <>{user.name}</>
    </StyleAvatar>
  );
};

export default Avatar;
