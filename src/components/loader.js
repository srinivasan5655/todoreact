import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};

export default loader;
