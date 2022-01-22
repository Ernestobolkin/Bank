import { useState } from "react";
import axios from "axios";

export const EditUser = () => {
  const [values, setValues] = useState({
    name: "",
    cash: NaN,
    credit: NaN,
  });

  const onHandleChange = (event) => {
    event.name === "name" &&
      setValues({
        name: event.value,
        cash: values.cash,
        credit: values.credit,
      });
    event.name === "cash" &&
      setValues({
        name: values.name,
        cash: event.value,
        credit: values.credit,
      });
    event.name === "credit" &&
      setValues({
        name: values.name,
        cash: values.cash,
        credit: event.value,
      });
  };

  const onHandleClick = async () => {
    const requestOptions = {
        cash: +values.cash,
        credit: +values.credit,
    };
    await axios
      .put(`http://localhost:8080/user/edit/${values.name}`, requestOptions)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <>
      <h2>Edit User</h2>
      <input
        placeholder="Enter User Name"
        name="name"
        onChange={(e) => onHandleChange(e.target)}
      ></input>{" "}
      <br />
      <input
        placeholder="Enter Cash"
        name="cash"
        type="number"
        onChange={(e) => onHandleChange(e.target)}
      ></input>{" "}
      <br />
      <input
        placeholder="Enter Credit"
        name="credit"
        type="number"
        onChange={(e) => onHandleChange(e.target)}
      ></input>
      <br />
      <button onClick={() => onHandleClick()}>Save</button>
    </>
  );
};
