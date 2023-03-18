import { Pagination } from "@mui/material";
import React from "react";

function PaginationComponent(props) {
  return (
    <Pagination
      count={30}
      variant="outlined"
      shape="rounded"
      onChange={(e, v)=>props.setPage(v)}
      value={props.page}
    />
  );
}

export default PaginationComponent;
