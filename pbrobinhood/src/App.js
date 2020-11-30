import "./App.css";
import Header from "./components/header/Header";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
