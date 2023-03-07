import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Deploy Automate</h1>
        <code>Terminal: npm run build</code>
        <p>Push the project to GitHub and link the repo to the netlify app.</p>
      </header>
    </div>
  );
}

export default App;