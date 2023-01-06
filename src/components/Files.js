import React from "react";
import CardFiles from "./Cards/CardFiles";

const Files = () => {
  return (
    <div className="mx-5 my-2 d-flex flex-column gap-2">
      <h4>Files</h4>
      <CardFiles />
      <CardFiles />
      <CardFiles />
    </div>
  );
};

export default Files;
