import React from "react";
import Files from "./Files";
import Meeting from "./Meeting";
import WrapperContent from "./WrapperContent";

const ContentRight = () => {
  return (
    <WrapperContent>
      <Meeting />
      <Files />
    </WrapperContent>
  );
};

export default ContentRight;
