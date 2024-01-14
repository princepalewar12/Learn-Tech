import NavContents from "./components/NavContents";
import Navbar from "./components/Navbar";
// import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App ">
      <div className="Header">
        <Navbar />
        <NavContents />
      </div>
    </div>
  );
}

export default App;
