import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/footer/Footer";
import Exchanges from "./pages/Exchanges/Exchanges";
import OneExchange from "./pages/OneExchange/OneExchange";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/coin/:coinID"} element={<Coin />} />
        <Route path={"/exchanges"} element={<Exchanges />} />
        <Route path={"/exchange/:exchangeID"} element={<OneExchange/ >} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
