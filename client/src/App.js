import axios from "axios";

function App() {


  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:8080/users");
    console.log(data);
  };
  return (
    <div>
      <button onClick={() => getUsers()}>click Me</button>
    </div>
  );
}

export default App;
