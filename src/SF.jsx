import React from "react";

const SF = () => {
  console.log("render statefull component");

  return <div>SF</div>;
};

export default React.memo(SF);
