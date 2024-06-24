import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
import "../style.css";
import _ from "lodash";
function UserLogin({ setUser }) {
  const [userName, setUserName] = useState();
  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
  };
  return (
    <>
      <div className="lb">
        <div className="login_container">
          <div className="login_title">
            <i class="fa-brands fa-rocketchat fab"></i>
            <h1>UChat</h1>
          </div>
          <div className="login_form">
            <input
              type="text"
              placeholder="Enter a unique Name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleUser}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
