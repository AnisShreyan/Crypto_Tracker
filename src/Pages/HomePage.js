import axios from "axios";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import PaginationComponent from "../components/PaginationComponent";
import CoinsBar from "../components/CoinsBar";

function HomePage() {
  const [coinArray, setCoinArray] = useState([""]);

  const [page, setPage] = useState(1);


  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`,
        { crossDomain: true }
      )
      .then((data) => {
        setCoinArray(data.data);
      });
  }, [page]);

  return (
    <div className="App">
      {coinArray.map((e, key) => (
        <CoinsBar
          key={key}
          name={e.name}
          image={e.image}
          current_price={e.current_price}
          symbol={e.symbol}
          id={e.id}
          market_cap={e.market_cap}
          price_change={e.price_change_percentage_24h}
        />
      ))}
      <div className="pagination-bar">
        <PaginationComponent setPage={setPage} />
      </div>
    </div>
  );
}

export default HomePage;
