import React from "react";
import { useNavigate} from "react-router-dom";

function CoinsBar(props) {
  const navigate = useNavigate();

  let price_change = props.price_change;
  if (price_change !== undefined) {
    price_change = price_change.toFixed(2)
  }
  let changeColor;
  price_change>0 ? changeColor = "green": changeColor= "red" 

  return (
    <>
      <section className="coins-tab" onClick={()=>navigate("/coins/"+props.id)}>
        <div className="coins-tab-sec-1">
          <img className="coin-logo" src={props.image} alt="Loading..." />
          <div className="coin-details">
            <h2>{props.name}</h2>
            <h4>{props.symbol}</h4>
          </div>
        </div>
        <div className="coins-tab-sec-2">
          <h4>Market Cap</h4>
          <h2>${props.market_cap}</h2>
        </div>
        <div className="coins-tab-sec-3">
          <h3 style={{color: changeColor}}>{price_change>0 ? `+${price_change}` : price_change }%</h3>
        </div>

        <div className="coins-tab-sec-4">
          <div className="rgt-dtls">
            <p>${props.current_price}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoinsBar;
