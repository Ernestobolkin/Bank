import axios from "axios";
import { useState } from "react";
import "./getAllUsers.style.scss"

export const GetAllUsers = ({ showUsers, SetShowUsers }) => {
  const [isClicked, setIsClicked] = useState(false);
  const getUsers = async () => {
    await axios
      .get("/users")
      .then(({ data }) => {
        SetShowUsers(data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
    setIsClicked(!isClicked);
  };

  const renderUser = () => {
    return (
      <>
        <details>
          <summary className="summary">All Users</summary>
          {showUsers.map((user, i) => {
            return (
              <div className="usersContainer" key={i}>
                <p>Name: {user.fullName}</p>
                <p>Cash: {user.cash}</p>
                <p>Credit: {user.credit}</p>
                <hr />
              </div>
            );
          })}
        </details>
      </>
    );
  };
  return (
    <div className="multiContainer">
      <button className="ui primary button" onClick={() => getUsers()}>
        Get All Users
      </button>
      {isClicked && renderUser()}
    </div>
  );
};
