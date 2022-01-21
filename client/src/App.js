import { GetAllUsers } from "./getAllUsers";
import { CreateUser } from "./createUser";
import { FindUser } from "./findUser";


function App() {
  return (
    <>
      <GetAllUsers/>
      <CreateUser/> <br/>
      <FindUser/>
    </>
  );
}

export default App;
