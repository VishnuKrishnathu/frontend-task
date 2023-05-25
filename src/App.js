import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const USER_API = "https://randomuser.me/api/?results=20&page=0";
  return (
    <div className="App">
      <div id="parent">
        <div id="child"></div>
      </div>
      <br />
      <Counter count={2} />
      <button>Click Me</button>
    </div>
  );
}
