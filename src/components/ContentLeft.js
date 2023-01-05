import React from "react";
import Design from "./Design";
import Header from "./Header";
import NavTab from "./NavTab";
import Progress from "./Progress";

const ContentLeft = () => {
  return (
    <div>
      <Header />
      <NavTab />
      <Design />
      <Progress />
    </div>
  );
};

export default ContentLeft;
