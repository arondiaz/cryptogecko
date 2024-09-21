import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/coin/:coidID"} element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;
