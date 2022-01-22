import { useState } from "react";
import axios from "axios";

export const FindUser = () => {
  const [value, setValue] = useState("");

  const findUserByName = async (name) => {
    await axios
      .get(`http://localhost:8080/user/${name}`)
      .then((res) => {
        alert(
          `Name: ${res.data[0].fullName}, Cash: ${res.data[0].cash}, Credit: ${res.data[0].credit}`
        );
      })
      .catch((err) => alert(err.response.data));
  };

  const onHandeClick = () => {
    findUserByName(value);
  };
  return (
    <>
      <div className="multiContainer">
        <h2>Find User By Name</h2>
        <div className="ui input">
          <input
            placeholder="Enter User Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <button className="ui primary button" onClick={() => onHandeClick()}>
          Find
        </button>
      </div>
    </>
  );
};
