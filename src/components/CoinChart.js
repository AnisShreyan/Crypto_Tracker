import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, //y-axis
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function CoinChart(props) {
  const [dataObj, setDataObj] = useState({
    prices: [],
  });
  const [date, setDate] = useState([]);
  const [price, setPrice] = useState([]);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.CoinName}/market_chart?vs_currency=usd&days=${props.time}`
      )
      .then((data) => setDataObj(data.data));
  }, [props.time]);

  useEffect(() => {
    setDate([]);
    setPrice([]);
    // let getDate = dataObj.prices.map((i) => {
    //   return i[0];
    // });
    let getDate = dataObj.prices.map((i) => {
      let dateString = new Date(i[0]);
      // return props.time == 1? dateString.getHours() : dateString.toLocaleDateString()
      let time =
        dateString.getHours() > 12
          ? `${dateString.getHours() - 12}:${dateString.getMinutes()} PM`
          : `${dateString.getHours()}:${dateString.getMinutes()} AM`;
      return props.time === 1 ? time : dateString.toLocaleDateString();
    });
    let getPrice = dataObj.prices.map((i) => {
      return i[1];
    });
    setDate(getDate);
    setPrice(getPrice);
  }, [dataObj]);

  const data = {
    labels: date,
    datasets: [
      {
        label: `${params.CoinName} Price (USD)`,
        data: price,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
    // scales: {
    //   x: {
    //     grid: {
    //       display: false,
    //     },
    //   },
    //   y: {
    //     grid: {
    //       display: false,
    //     },
    //   },
    // },
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default CoinChart;
