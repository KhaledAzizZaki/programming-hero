import "./App.css";
import ToDo from "./Todo";

function App() {
  const time = 50;
  return (
    <>
      <h1>React Core Concepts</h1>
      <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Learn js" isDone={false}></ToDo>
      <ToDo task="Learn next.js" isDone={true}></ToDo>
      {/* <Pet></Pet> */}
      {/* <Sports></Sports> */}
      {/* <Student name="Badon" roll="34"></Student>
      <Student name="Rohim" roll="21"></Student>
      <Person name="lion" age="20"></Person>
      <Developer name="Monir" tac="js"></Developer>
      <Developer name="Rajon" tac="py"></Developer>
      <Developer name="shabana" tac="java"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Shakib" runs="4000"></Player>
      <Salami event="Eid" amount="100"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  );
}

function Player({ name, runs }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "3px solid green",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <p>Developer: {props.name}</p>
      <p>Tec: {props.tac}</p>
    </div>
  );
}

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Roll: {props.roll}</p>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    color: "red",
    fontSize: "50px",
  };

  return (
    <p style={personStyle}>
      i am a person {props.name} {props.age}
    </p>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
      <ul>
        <li>banana</li>
        <li>apple</li>
      </ul>
    </div>
  );
}

function Pet() {
  return <h2>cat</h2>;
}

export default App;
