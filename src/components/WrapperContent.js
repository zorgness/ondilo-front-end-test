import React from "react";

function WrapperContent({ children }) {
  return (
    <div
      style={{
        marginTop: "28px",
        maxWidth: "400px",
      }}
    >
      {children}
    </div>
  );
}

export default WrapperContent;
