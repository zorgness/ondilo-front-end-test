import React from "react";
import Design from "./Design";
import NavTab from "./NavTab";
import Progress from "./Progress";

const ContentLeft = () => {
  return (
    <div>
      <NavTab />
      <Design />
      <Progress />
    </div>
  );
};

export default ContentLeft;
