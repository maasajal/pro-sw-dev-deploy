import logo from "./logo.svg";
import "./App.css";
import Testing from "./components/Testing";
import Documentation from "./components/Documentation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Testing />
        <Documentation />
      </header>
    </div>
  );
}

export default App;
