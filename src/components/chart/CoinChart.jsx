/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const CoinChart = ({ historical }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (historical.prices) {
      historical.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });

      setData(dataCopy);
    }
  }, [historical]);

  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default CoinChart;
