import Body from "./components/Body";
import NavContents from "./components/NavContents";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App ">
      <div className="Header">
        <Navbar />
        <NavContents />
        <Body/>
      </div>
    </div>
  );
}

export default App;
