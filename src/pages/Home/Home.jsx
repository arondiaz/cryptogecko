import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="title">
          Largest <br />
          Crypto Marketplace
        </h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          consectetur ipsum natus voluptates quaerat velit sit ipsam illum
          aliquam.
        </p>
        <form>
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>Variation</p>
          <p className="marketcap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
