import { useState, useEffect } from "react";
import axios from "axios";

export const CreateUser = () => {
  const [user, setUser] = useState();
  const [userValue, setUserValue] = useState();
  const [cashValue, setCashValue] = useState();
  const [creditValue, setCreditValue] = useState();

  const onChangeHandle = (e) => {
    e.name === "UserName" && setUserValue(e.value);
    e.name === "UserCash" && setCashValue(e.value);
    e.name === "UserCredit" && setCreditValue(e.value);
    setUser({
      fullName: userValue,
      cash: cashValue,
      credit: creditValue,
    });
  };

  const onClickHandel = async () => {
    await axios
      .post("http://localhost:8080/user/add", user)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        console.log(user);
        alert(error.response.data);
      });
  };


  return (
    <>
      <input
        onChange={(e) => onChangeHandle(e.target)}
        name="UserName"
        value={userValue}
        placeholder="Enter User Name"
      ></input>
      <br />
      <input
        onChange={(e) => onChangeHandle(e.target)}
        name="UserCash"
        type="number"
        value={cashValue}
        placeholder="Enter Cash"
      ></input>
      <br />
      <input
        onChange={(e) => onChangeHandle(e.target)}
        name="UserCredit"
        type="number"
        value={creditValue}
        placeholder="Enter Credit"
      ></input>
      <br />
      <button onClick={() => onClickHandel()}>Add User</button>
    </>
  );
};
