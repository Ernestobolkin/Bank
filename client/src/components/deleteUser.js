import { useState } from "react";
import axios from "axios";

export const DeleteUser = () => {
  const [userName, setUserName] = useState("");

  const onHandleClick = async()=>{
    axios.delete(`http://localhost:8080/user/${userName}`).then((res)=>{
      alert(res.data)
    }).catch((error)=>{
      alert(error.response.data);
    })
  }

  return (
    <>
      <h2>Delete User</h2>
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        name="name"
        placeholder="Enter Name Of The User"
      ></input> <br/>
      <button onClick={()=>onHandleClick()}>Delete</button>
    </>
  );
};
