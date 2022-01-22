import { useState } from "react";
import axios from "axios";

export const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    cash: "",
    credit: "",
  });

  const onChangeHandle = (e) => {
    e.name === "UserName" && setUser({ ...user, name: e.value });
    e.name === "UserCash" && setUser({ ...user, cash: e.value });
    e.name === "UserCredit" && setUser({ ...user, credit: e.value });
  };

  const onClickHandel = async () => {
    const sendData = {
      fullName: user.name,
      cash: +user.cash,
      credit: +user.credit,
    };
    await axios
      .post("http://localhost:8080/user/add", sendData)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <>
      <h2>Create New User</h2>
      <input
        onChange={(e) => onChangeHandle(e.target)}
        name="UserName"
        value={user.name}
        placeholder="Enter User Name"
      ></input>
      <br />
      <input
        onChange={(e) => onChangeHandle(e.target)}
        name="UserCash"
        type="number"
        value={user.cash}
        placeholder="Enter Cash"
      ></input>
      <br />
      <input
        onChange={(e) => onChangeHandle(e.target)}
        name="UserCredit"
        type="number"
        value={user.credit}
        placeholder="Enter Credit"
      ></input>
      <br />
      <button onClick={() => onClickHandel()}>Add User</button>
    </>
  );
};
