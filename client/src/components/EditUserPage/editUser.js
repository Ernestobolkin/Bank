import { useState } from "react";
import axios from "axios";
import "../multi.style.scss";

export const EditUser = () => {
  const [values, setValues] = useState({
    name: "",
    cash: NaN,
    credit: NaN,
  });

  const onHandleChange = (event) => {
    event.name === "name" && setValues({ ...values, name: event.value });
    event.name === "cash" && setValues({ ...values, cash: event.value });
    event.name === "credit" && setValues({ ...values, credit: event.value });
  };

  const onHandleClick = async () => {
    const requestOptions = {
      cash: +values.cash,
      credit: +values.credit,
    };
    await axios
      .put(`/user/edit/${values.name}`, requestOptions)
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
        <h2>Edit User</h2>
        <div className="ui input">
          <input
            placeholder="Enter User Name"
            name="name"
            onChange={(e) => onHandleChange(e.target)}
          ></input>
        </div>
        <div className="ui input">
          <input
            placeholder="Enter Cash"
            name="cash"
            type="number"
            onChange={(e) => onHandleChange(e.target)}
          ></input>
        </div>
        <div className="ui input">
          <input
            placeholder="Enter Credit"
            name="credit"
            type="number"
            onChange={(e) => onHandleChange(e.target)}
          ></input>
        </div>
        <button className="ui primary button" onClick={() => onHandleClick()}>
          Save
        </button>
      </div>
    </>
  );
};
