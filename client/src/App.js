import { GetAllUsers } from "./components/getAllUsers";
import { CreateUser } from "./components/createUser";
import { FindUser } from "./components/findUser";
import { EditUser } from "./components/editUser";
import { DeleteUser } from "./components/deleteUser";

function App() {
  return (
    <>
      <GetAllUsers />
      <CreateUser /> <br />
      <FindUser /> <br />
      <EditUser />
      <DeleteUser />
    </>
  );
}

export default App;
