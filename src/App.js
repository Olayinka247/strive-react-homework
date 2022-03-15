import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/MyNav";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <WelcomePage />
      <HomePage />
      <MyFooter />
    </div>
  );
}

export default App;
