import React from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Navigation from "./Navigation";

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
