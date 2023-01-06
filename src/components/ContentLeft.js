import React from "react";
import Design from "./Design";
import NavTab from "./NavTab";
import Progress from "./Progress";
import WrapperContent from "./WrapperContent";

const ContentLeft = () => {
  return (
    <WrapperContent>
      <NavTab />
      <Design />
      <Progress />
    </WrapperContent>
  );
};

export default ContentLeft;
