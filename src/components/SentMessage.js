import React from "react";

import "./ChatMessage.css";
const SentMessage = (props) => {
  return <p className="send"> {props.message}</p>;
};

export default SentMessage;
