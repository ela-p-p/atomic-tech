import React from "react";

const styles = {
  color: "#f6dde8",
  display: "flex",
  justifyContent: "flex-end",
  position: "sticky",
  top: 0,
  backgroundColor: "#350142"
};
const Navigation = ({ onRouteChange, route }) => {
  return (
    <nav
      style={styles}
      className="f4-ns f5 underline pr3-ns pr1 pointer z-1 ba b--near-white bw1"
    >
      {(route === "about" || route ==='portfolio') && (
        <p className="mr5-ns mr3 grow" onClick={() => onRouteChange("home")}>
          Home
        </p>
      )}

      {(route === "home" || route === 'portfolio') && (
        <p className="mr5-ns mr3 grow" onClick={() => onRouteChange("about")}>
          About
        </p>
      )}
      {(route === 'about' || route === 'home') && (
        <p className="grow" onClick={() => onRouteChange("portfolio")}>
          Portfolio
        </p>
      )}
    </nav>
  );
};

export default Navigation;
