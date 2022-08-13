import logo from "./logo.svg";
import "./App.css";
import Countries from "./components/Countries/Countries";
import OnlyCountry from "./components/OnlyCountry/OnlyCountry";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <OnlyCountry></OnlyCountry>
    </div>
  );
}

export default App;
