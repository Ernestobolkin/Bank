import axios from "axios";

function App() {


  const getUsers = async () => {
    console.log("works");
    const { data } = await axios.get("/users");
    console.log(data);
  };
  return (
    <div>
      <button onClick={() => getUsers()}>click Me</button>
    </div>
  );
}

export default App;
