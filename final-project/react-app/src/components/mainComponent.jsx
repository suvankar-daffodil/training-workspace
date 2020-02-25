import React from "react";

const MainComponent = props => {
  return (
    <div className="container">
      <div className="content">{props.children.map(elem => elem)}</div>
    </div>
  );
};

export default MainComponent;
