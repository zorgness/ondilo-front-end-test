import React from "react";
import Navigation from "./Navigation";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

const OndiloApp = () => {
  return (
    <div className="d-flex">
      <Navigation />
      <div className="d-flex justify-content-between flex-wrap">
        <ContentLeft />
        <ContentRight />
      </div>
    </div>
  );
};

export default OndiloApp;
