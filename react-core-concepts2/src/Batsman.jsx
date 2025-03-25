import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const [sixes, setSix] = useState(0);

  const one = () => {
    const newRuns = runs + 1;
    return setRuns(newRuns);
  };
  const four = () => {
    const newRuns = runs + 4;
    return setRuns(newRuns);
  };
  const six = () => {
    const newRuns = runs + 6;
    const totalSix = sixes + 1;
    setSix(totalSix);
    setRuns(newRuns);
  };
  const minTan = () => {
    const newRuns = runs - 10;
    setRuns(newRuns);
  };

  return (
    <div className="bor-der">
      <h3>Player: Samin</h3>
      <p>Score: {runs}</p>
      <p>Total Six: {sixes}</p>
      <button onClick={one} className="bor-der">
        1
      </button>
      <button onClick={four} className="bor-der">
        4
      </button>
      <button onClick={six} className="bor-der">
        6
      </button>
      <button onClick={minTan} className="bor-der text-red-400">
        - 10
      </button>
    </div>
  );
}
