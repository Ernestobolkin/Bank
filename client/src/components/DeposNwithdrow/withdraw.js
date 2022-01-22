import axios from "axios";
import "../multi.style.scss";

export const Withdraw = ({ withdraw, setWithdraw }) => {
  const onHandleChange = async (e) => {
    e.name === "name" && setWithdraw({ ...withdraw, name: e.value });
    e.name === "withdraw" && setWithdraw({ ...withdraw, withdraw: e.value });
  };

  const onHandleClick = async () => {
    const requestOptions = {
      name: withdraw.name,
      withdraw: +withdraw.withdraw,
    };
    await axios
      .put(`/users/withdraw`, requestOptions)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  return (
    <div className="multiContainer">
      <h2>Withdraw</h2>
      <div className="ui input">
        <input
          placeholder="Enter User Name"
          name="name"
          onChange={(e) => onHandleChange(e.target)}
        ></input>
      </div>
      <div className="ui input">
        <input
          placeholder="Enter Amount To Withdraw"
          name="withdraw"
          type="string"
          onChange={(e) => onHandleChange(e.target)}
        ></input>
      </div>
      <button className="ui primary button" onClick={() => onHandleClick()}>
        Withdraw
      </button>
    </div>
  );
};
