import React from "react";
import Meeting from "./Meeting";
import Search from "./Search";
import Files from "./Files";
import WrapperContent from "./WrapperContent";

const ContentRight = () => {
  return (
    <WrapperContent>
      <Search />
      <Meeting />
      <Files />
    </WrapperContent>
  );
};

export default ContentRight;
