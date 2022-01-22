import axios from "axios";

export const DeleteAllUsers = () => {
  const onClickHandle = async () => {
    axios
      .delete("/users")
      .then(({data}) => {
        alert(data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  return (
    <>
      <div className="multiContainer">
        <button className="ui primary button" onClick={() => onClickHandle()}>
          Delete All Users
        </button>
      </div>
    </>
  );
};
