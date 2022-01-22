import { useState } from "react";
import axios from "axios";

export const DeleteUser = () => {
  const [userName, setUserName] = useState("");

  const onHandleClick = async () => {
    axios
      .delete(`http://localhost:8080/user/${userName}`)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <>
      <div className="multiContainer">
        <h2>Delete User</h2>
        <div className="ui input">
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            name="name"
            placeholder="Enter Name Of The User"
          ></input>
        </div>
        <button className="ui primary button" onClick={() => onHandleClick()}>Delete</button>
      </div>
    </>
  );
};
