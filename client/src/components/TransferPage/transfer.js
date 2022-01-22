import axios from "axios";
import "../multi.style.scss";

export const Transfer = ({ transfer, setTransfer }) => {
  const onHandleChange = async (e) => {
    e.name === "name" && setTransfer({ ...transfer, name: e.value });
    e.name === "sender" && setTransfer({ ...transfer, sender: e.value });
    e.name === "amount" && setTransfer({ ...transfer, amount: e.value });
  };

  const onHandleClick = async () => {
    const requestOptions = {
      name: transfer.name,
      sender: transfer.sender,
      amount: +transfer.amount,
    };
    await axios
      .put(`/users/transferring`, requestOptions)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  return (
    <div className="multiContainer">
      <h2>Send To User</h2>
      <div className="ui input">
        <input
          placeholder="Enter User Name"
          name="name"
          onChange={(e) => onHandleChange(e.target)}
        ></input>
      </div>
      <div className="ui input">
        <input
          placeholder="Enter Sender Name"
          name="sender"
          type="string"
          onChange={(e) => onHandleChange(e.target)}
        ></input>
      </div>
      <div className="ui input">
        <input
          placeholder="Enter Amount"
          name="amount"
          type="number"
          onChange={(e) => onHandleChange(e.target)}
        ></input>
      </div>
      <button className="ui primary button" onClick={() => onHandleClick()}>
        Send
      </button>
    </div>
  );
};
