import axios from "axios";

export const DeleteAllUsers = () => {
  const onClickHandle = async () => {
    axios
      .delete("http://localhost:8080/users")
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  return (
    <>
      <button onClick={() => onClickHandle()}>Delete All Users</button>
    </>
  );
};
