import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addBtn = () => {
    const newCount = count + 6;
    setCount(newCount);
  };

  return (
    <div className="border">
      <h3>Count: {count}</h3>
      <button onClick={addBtn}>Add</button>
    </div>
  );
}
