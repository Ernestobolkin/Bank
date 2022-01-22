import { GetAllUsers } from "./components/getAllUsers";
import { CreateUser } from "./components/createUser";
import { FindUser } from "./components/findUser";
import { EditUser } from "./components/editUser";
import { DeleteUser } from "./components/deleteUser";
import { DeleteAllUsers } from "./components/deleteAllUser";
import { Navbar } from "./components/navBar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact>
          <CreateUser />
        </Route>

        <Route path="/edit" exact>
          <EditUser />
        </Route>

        <Route path="/search" exact>
          <GetAllUsers />
          <FindUser />
        </Route>

        <Route path="/manege" exact>
          <DeleteAllUsers />
          <DeleteUser />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
