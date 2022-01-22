import axios from "axios";

export const GetAllUsers = () => {
  const getUsers = async () => {
    await axios
      .get("http://localhost:8080/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  return (
    <div className="multiContainer">
      <button className="ui primary button" onClick={() => getUsers()}>Get All Users</button>
    </div>
  );
};
