import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function TopBar() {

  const nav = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55', padding: "0 75px" }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{userSelect: "none", cursor: 'pointer'}} onClick={()=>nav('/')}>
            Crypto Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
