import React from "react";

import "./ChatMessage.css";
const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <span className="name"> {props.user.username}</span>
      <div className="textBody">
        <img className="avatar" src={props.user.avatar} />
        <p className="body"> {props.message}</p>
      </div>
    </div>
  );
};
export default ReceivedMessage;
