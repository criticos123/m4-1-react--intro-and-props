import React from "react";
import styled from "styled-components";
import "./Header.css";
const Headdiv = styled.header`
  display: flex;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;
const Header = (props) => {
  const currentParticipants = props.Participants.filter((user) => {
    return user.username !== props.currentUser.username;
  });

  const mapCurrentUser = currentParticipants.map((user) => {
    return (
      <>
        <Avatar src={user.avatar} />
        <p>{user.username}</p>
      </>
    );
  });
  return <Headdiv>{mapCurrentUser}</Headdiv>;
};
export default Header;
