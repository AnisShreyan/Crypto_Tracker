import { Button, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cryptochart from "../components/Cryptochart";

function SingleCoinPage() {
  const params = useParams();
  const [coin, setCoin] = useState("");
  // const [descrip, setDescrip] = useState("");
  let descrip;

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.CoinName}`)
      .then((data) => setCoin(data.data));
  }, [params]);

  if (coin.description !== undefined) {
    descrip = coin.description.en.split(". ")[0] + ".";
    }

    let change;
    let changeColor;

    if (coin.market_data !== undefined) {
      let percentage = coin.market_data.price_change_percentage_24h.toFixed(2);
      percentage > 0? change = `+${percentage}`: change = percentage
      percentage > 0? changeColor = "green": changeColor = "red"
    }

  return (
    <div className="Single-Coin-Page">
      <div className="Single-Coin-Page-container-1">
        <img src={coin.image !== undefined ? coin.image.large : ""} alt="Loading..." />
        <h1>{coin.name}</h1>
        <p className="Single-Coin-desc" dangerouslySetInnerHTML={{__html: descrip}}></p>
        <span>
          <p>
            <strong>Rank:</strong> {coin.market_cap_rank}
          </p>
          <p>
            <strong>Current Price:</strong> $
            {coin.market_data !== undefined
              ? coin.market_data.current_price.usd
              : ""} <span style={{fontSize: 17, fontWeight: "bold", color:  changeColor}}>{change}%</span>
          </p>
          <p>
            <strong>Market Cap:</strong> $
            {coin.market_data !== undefined
              ? coin.market_data.market_cap.usd
              : ""}
          </p>
        </span>
        <Stack>
        <Button variant="outlined" style={{fontWeight: "600", fontSize: 18}}>Add to Watchlist</Button>
        </Stack>
      </div>
      <div className="Single-Coin-Page-container-2"><Cryptochart/></div>
    </div>
  );
}

export default SingleCoinPage;
