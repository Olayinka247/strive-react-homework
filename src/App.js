import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/MyNav";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <WelcomePage />
      <HomePage />
    </div>
  );
}

export default App;
