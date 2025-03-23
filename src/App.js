import logo from "./logo.svg";
import "./App.css";
import Hello from "./componentsfab/Hello";
import Message from "./componentsfab/Message";
import Profile from "./componentsfab/Profile";
import DisplayData from "./componentsfab/DisplayData";
import "./cssfab/DisplayData.css";

function App() {
  return (
    <div className="App">
      {/* first section */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Fabrids <code>src/App.js</code> and save to reload. lets see how
          the next line content shows in web page (shows in same line)
          <div> i have added div tag content inside p tag </div>
        </p>
        <div> i have added div tag content outside the p tag </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* second section */}
      <Hello></Hello>
      <Message />
      <Profile name="fabpassedprofs"></Profile>
      <Profile name="hishamprofs"></Profile>
      <Profile name="hibasedprofs"></Profile>
      <Profile name="faseeassedprofs" lastname="ibrahim">
        <h1>first children of profs</h1>
        <h2>second children of profs</h2>
      </Profile>

      {/* third section data Loaded through API*/}
      <h1> Data Loaded from database</h1>
      <DisplayData />
    </div>
  );
}

export default App;
