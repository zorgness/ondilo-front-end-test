import React from "react";
import Design from "./Design";
import Header from "./Header";
import NavTab from "./NavTab";
import Progress from "./Progress";
import WrapperContent from "./WrapperContent";

const ContentLeft = () => {
  return (
    <WrapperContent>
      <Header />
      <NavTab />
      <Design />
      <Progress />
    </WrapperContent>
  );
};

export default ContentLeft;
