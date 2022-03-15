import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/MyNav";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <WelcomePage />
    </div>
  );
}

export default App;
