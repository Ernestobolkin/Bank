import { useState } from "react";
import axios from "axios";

export const FindUser = () => {
  const [value, setValue] = useState("");

  const findUserByName = async (name) => {
    await axios
      .get(`http://localhost:8080/user/${name}`)
      .then((res) => {
        alert(`Name: ${res.data[0].fullName}, Cash: ${res.data[0].cash}, Credit: ${res.data[0].credit}`) 
      })
      .catch((err) => alert(err.response.data));
  };

  const onHandeClick = () => {
    findUserByName(value);
  };
  return (
    <>
      <input
        placeholder="Enter User Name To Find"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={() => onHandeClick()}>Find</button>
    </>
  );
};
