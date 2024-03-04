import "./App.css";
import Facts from "./Components/Facts";
import Title from "./Components/Title";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <img src={reactLogo} />
      <div>
        <Title />
        <Facts />
      </div>
    </>
  );
}

export default App;
