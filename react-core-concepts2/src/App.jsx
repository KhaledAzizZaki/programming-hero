import "./App.css";
import Batsman from "./Batsman";
import Counter from "./counter";

function App() {
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
