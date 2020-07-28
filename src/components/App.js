import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header
        currentUser={props.currentUser}
        Participants={props.conversation.participants}
      />
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer />
    </div>
  );
};

export default App;
