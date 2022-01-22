import { GetAllUsers } from "./components/SeacrchPage/getAllUsers";
import { CreateUser } from "./components/CreatUserPage/createUser";
import { FindUser } from "./components/SeacrchPage/findUser";
import { EditUser } from "./components/EditUserPage/editUser";
import { DeleteUser } from "./components/ManegmantPage/deleteUser";
import { DeleteAllUsers } from "./components/ManegmantPage/deleteAllUser";
import { Navbar } from "./components/navBar";
import { BrowserRouter, Route } from "react-router-dom";
import { Transfer } from "./components/TransferPage/transfer";
import { Withdraw } from "./components/DeposNwithdrow/withdraw";
import { useState } from "react";

function App() {
  const [showUsers, SetShowUsers] = useState();
  const [transfer, setTransfer] = useState({
    name: "",
    sender: "",
    amount: "",
  });
  const [withdraw, setWithdraw] = useState({
    name: "",
    withdraw: "",
  });

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

        <Route path="/transfer" exact>
          <Transfer transfer={transfer} setTransfer={setTransfer} />
        </Route>

        <Route path="/withdraw" exact>
          <Withdraw withdraw={withdraw} setWithdraw={setWithdraw} />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
