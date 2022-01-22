import { GetAllUsers } from "./components/SeacrchPage/getAllUsers";
import { CreateUser } from "./components/CreatUserPage/createUser";
import { FindUser } from "./components/SeacrchPage/findUser";
import { EditUser } from "./components/EditUserPage/editUser";
import { DeleteUser } from "./components/ManegmantPage/deleteUser";
import { DeleteAllUsers } from "./components/ManegmantPage/deleteAllUser";
import { Navbar } from "./components/navBar";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showUsers, SetShowUsers] = useState();

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
          <FindUser />
          <GetAllUsers showUsers={showUsers} SetShowUsers={SetShowUsers} />
        </Route>

        <Route path="/manege" exact>
          <DeleteUser />
          <DeleteAllUsers />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
