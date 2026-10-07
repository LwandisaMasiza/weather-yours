import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Weather App</h1>
        <Weather />
      </header>

      <footer>
        <p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHubssss
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
