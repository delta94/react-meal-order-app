import React from "react";
import loadingSVG from "../images/loading.svg";

const Loading = () => (
  <div>
    <img
      className="max-w-xs m-auto h-screen flex justify-center items-center"
      src={loadingSVG}
      alt=""
    />
  </div>
);

export default Loading;
