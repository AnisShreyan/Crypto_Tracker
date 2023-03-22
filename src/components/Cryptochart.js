import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import CoinChart from "./CoinChart";

function Cryptochart() {

  const [time, setTime] = useState(1);

  const ClickHandler = (time)=>{
    setTime(time)
  }

  let style = {fontWeight: "500", fontSize: 18}

  return (
    <div className="charts-section">
      <div className="chart">
        <CoinChart time={time}/>
      </div>
      <div className="time-section">
        <Stack spacing={5} direction="row">
          <Button variant={time==1?"contained": "outlined"}style={style} onClick={()=>{ClickHandler(1)}} >24 Hours</Button>
          <Button variant={time==30?"contained": "outlined"} style={style} onClick={()=>{ClickHandler(30)}} >30 Days</Button>
          <Button variant={time==90?"contained": "outlined"} style={style} onClick={()=>{ClickHandler(90)}} >3 Months</Button>
          <Button variant={time==365?"contained": "outlined"} style={style} onClick={()=>{ClickHandler(365)}} >1 Year</Button>
          <Button variant={time=="max"?"contained": "outlined"} style={style} onClick={()=>{ClickHandler("max")}} >All Time</Button>
        </Stack>
      </div>
    </div>
  );
}

export default Cryptochart;
