import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [flg, setFlg] = useState(false);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Fetchエラー:", err));
  };
  useEffect(() => {
    fetchData();
  }, [flg]);

  return (
    <>
      <p>テスト</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setFlg(!flg)}>取得</button>
    </>
  );
}

export default App;
