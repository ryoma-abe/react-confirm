import { useState } from "react";
import "./App.css";

function App() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  const onSubmit = () => {
    alert(`${fName} ${lName}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          FirstName
          <input
            type="text"
            value={fName}
            onChange={(e) => setFname(e.target.value)}
          />
        </label>
        <label>
          LastName
          <input
            type="text"
            value={lName}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
