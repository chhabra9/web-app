import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Subs from './subs';
function App() {
  return (
    <div className="App">
    <Subs ></Subs>
    <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn angular
        </a>
      </header>
    </div>
  );
}

export default App;
