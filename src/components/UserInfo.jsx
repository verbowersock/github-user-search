import styled from "styled-components";
import { PRIMARY, SECONDARY } from "../Constants";
import { ReactComponent as LocationIcon } from "./../assets/location.svg";
import { ReactComponent as EmailIcon } from "./../assets/email.svg";

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${SECONDARY};
  padding: 10px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
  align-items: center;
  margin-right: 50px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.div`
  height: 80px;
  width: 80px;
  min-width: 80px;
  border-radius: 80px;
  border: 1px solid ${PRIMARY};
  background-size: cover;
  background-image: url("${(props) => props.imgObj}");
  background-position: center;
`;

const Location = styled.div`
  height: 50px;
  display: flex;
  justify-items: center;
`;

const LocationIconStyled = styled(LocationIcon)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const LoginContainer = styled.h4`
  margin-bottom: 15px;
`;

const NameContainer = styled.h4`
  margin: 0 0 10px; ;
`;
const BioContainer = styled.p`
  margin: 7px 0;
`;

const EmailContainer = styled.p`
  margin: 7px 0;
  display: flex;
  align-items: center;
  line-height: 13px;
`;

const StatsContainer = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EmailIconStyled = styled(EmailIcon)`
  height: 20px;
  width: 20px;
  margin-right: 7px;
`;

function UserInfo({ user }) {
  const {
    html_url,
    login,
    avatar_url,
    location,
    email,
    name,
    bio,
    followers,
    following,
    public_repos,
  } = user;

  const handleProfileClick = () => {
    window.open(html_url);
  };

  return (
    <UserInfoContainer onClick={handleProfileClick}>
      <LeftColumn>
        <Avatar imgObj={avatar_url}></Avatar>
        <LoginContainer>{login}</LoginContainer>
        {location && (
          <Location>
            <LocationIconStyled />
            {location}
          </Location>
        )}
      </LeftColumn>
      <RightColumn>
        {name && <NameContainer>{name}</NameContainer>}
        {bio && <BioContainer>{bio}</BioContainer>}
        {email && (
          <EmailContainer>
            <EmailIconStyled />
            {email}
          </EmailContainer>
        )}
        <StatsContainer>
          {followers}
          &nbsp;followers |&nbsp;{following}
          &nbsp;following |&nbsp;{public_repos}
          &nbsp;public repos
        </StatsContainer>
      </RightColumn>
    </UserInfoContainer>
  );
}

export default UserInfo;
