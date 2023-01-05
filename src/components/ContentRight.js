import React from "react";
import Meeting from "./Meeting";
import Search from "./Search";
import Files from "./Files";

const ContentRight = () => {
  return (
    <div>
      <Search />
      <Meeting />
      <Files />
    </div>
  );
};

export default ContentRight;
