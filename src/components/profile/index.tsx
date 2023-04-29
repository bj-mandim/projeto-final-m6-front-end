import { useContext } from "react";
import { ProfileWrapper } from "./styles";
import { ContextApi } from "../../contexts";
import { UserContext } from "../../contexts/userContext";
import { StyleAvatarUserAdminPage } from "../avatar/style";

export const Profile = () => {
  const { setIsOpen }: any = useContext(ContextApi);
  const { user }: any = useContext(UserContext);
  const { name, description } = user;
  return (
    <>
      <ProfileWrapper>
        <figure className="anunciante">
          <StyleAvatarUserAdminPage>
            {user.image_url ? (
              <img src={user.image_url} alt="" />
            ) : (
              <div>{user.name[0].toUpperCase()}</div>
            )}
          </StyleAvatarUserAdminPage>
          <figcaption className="anunciante-info">
            <div className="anunciante-nome">
              <h3 className="heading-6">{name}</h3>
              <span className="body-2 anunciante-status">Anunciante</span>
            </div>
            <p className="anunciante-descricao body-1">{description}</p>
          </figcaption>
        </figure>

        <button
          className="btn btn-outline-primary"
          onClick={() => setIsOpen(true)}
        >
          Criar anuncio
        </button>
      </ProfileWrapper>
    </>
  );
};

export const ProfileUser = () => {
  const { setIsOpen }: any = useContext(ContextApi);
  const { userPage }: any = useContext(UserContext);

  console.log(userPage);
  return (
    <>
      <ProfileWrapper>
        <figure className="anunciante">
          {/* <StyleAvatarUserAdminPage>
            {userPage.image_url ? (
              <img src={userPage.image_url} alt="" />
            ) : (
              <div>{userPage.name[0].toUpperCase()}</div>
            )}
          </StyleAvatarUserAdminPage> */}
          <figcaption className="anunciante-info">
            <div className="anunciante-nome">
              <h3 className="heading-6">{userPage.name}</h3>
            </div>
            <p className="anunciante-descricao body-1">
              {userPage.description}
            </p>
          </figcaption>
        </figure>
      </ProfileWrapper>
    </>
  );
};
