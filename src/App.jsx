import { useState } from "react";
import UserLogin from "./components/UserLogin";
import ChatContainer from "./components/ChatContainer";

import "./App.css";

function App() {
  return (
    <>
      <div className="bigb">
        <div className="App">
          <ChatContainer />
        </div>
      </div>
    </>
  );
}

export default App;
