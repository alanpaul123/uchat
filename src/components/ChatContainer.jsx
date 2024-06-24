import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import socketIOClient from "socket.io-client";

function ChatContainer() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  // const socketio = socketIOClient("http://localhost:3001");
  const socketio = socketIOClient("https://socketserver-1-99vh.onrender.com");
  const [chats, setChats] = useState([]);
  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });
  });
  const sendToSocket = (chat) => {
    socketio.emit("chat", chat);
  };

  const addMessage = (chat) => {
    const newChat = {
      ...chat,
      user: localStorage.getItem("user"),
      avatar: localStorage.getItem("avatar"),
    };
    setChats([...chats, newChat]);
    sendToSocket([...chats, newChat]);
  };

  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  };
  return (
    <div>
      {user ? (
        <div>
          <div className="chats_header">
            <h4>
              <i class="fa-solid fa-user"></i> Username: {user}
            </h4>

            <p className="chats_logout" onClick={Logout}>
              <strong>
                {" "}
                <i class="fa-solid fa-right-from-bracket"></i> Logout
              </strong>
            </p>
          </div>
          <ChatLists chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
}

export default ChatContainer;
