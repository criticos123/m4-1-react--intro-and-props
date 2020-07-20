import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  return (
    <div className="chat-message">
      <img className="avatar" src={props.message.user.avatar} />
      <div className="text">
        <h6 className="name"> {props.message.user.username}</h6>
        <p className="body"> {props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
