import React from "react";

const styles = {
  color: "#f6dde8",
  display: "flex",
  justifyContent: "flex-end",
  position: 'sticky',
  top: 0
};
const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={styles} className="f4-ns f5 mr6-ns mr2 underline pa3 pointer">
      <p className="mr5-ns mr3 grow" onClick={() => onRouteChange("home")}>
        Home
      </p>
      <p className="mr5-ns mr3 grow" onClick={() => onRouteChange("about")}>
        About
      </p>
      <p 
      className="grow"
      onClick={() => onRouteChange("portfolio")}>Portfolio</p>
    </nav>
  );
};

export default Navigation;
