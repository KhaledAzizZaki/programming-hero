import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./counter";
import User from "./user";
import Friends from "./friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users#").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users#");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();
  function handleClick() {
    alert("i am clicked");
  }

  const handleClick3 = () => {
    alert("3");
  };

  const add5 = (num) => {
    const newNum = num + 5;
    return alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>loading....</h3>}>
        <Friends userName={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3 className="bor-der">loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("4")}>Click Me 4</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button
        onClick={function handleClick2() {
          alert("click");
        }}
      >
        Click Me 2
      </button>
      <button onClick={() => add5(5)}>add 5</button>
    </>
  );
}

export default App;
