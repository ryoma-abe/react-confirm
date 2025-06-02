import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "テスト";
  });
  const onClickUp = () => {
    setCount(count + 1);
  };
  const onClickDown = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={onClickUp}>+</button>
      {count}
      <button onClick={onClickDown}>-</button>
    </div>
  );
}

export default App;
