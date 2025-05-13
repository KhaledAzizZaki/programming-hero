import "./App.css";
import User from "./component/User";

const usersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h1>User Management Application</h1>
      <User usersPromise={usersPromise}></User>
    </>
  );
}

export default App;
