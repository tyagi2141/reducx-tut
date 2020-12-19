import "./App.css";
import HomeContainer from "./container/HomeContainer";
import Header from "./component/Header";
import HeaderComponent from "./container/HeaderContainer";
import HeaderContainer from "./container/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
