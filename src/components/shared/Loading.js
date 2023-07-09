"use client";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "3 auto",
  borderColor: "#F3B02E",
};

const Loading = ({ size = 200 }) => {
  let [loading] = useState(true);
  let [color] = useState("#F3B02E");

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
