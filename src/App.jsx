import "./App.css";
import useHook from "./useHook";
function App() {
  const [lName, setLname] = useHook("");
  const [fName, setFname] = useHook("");

  const onSubmit = () => {
    alert(`${fName} ${lName}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          FirstName
          <input type="text" {...setLname} />
        </label>
        <label>
          LastName
          <input type="text" {...setFname} />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
