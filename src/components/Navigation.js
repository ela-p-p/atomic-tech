import React from "react";

const styles = {
    color: '#f6dde8',
    display: "flex", 
    justifyContent: "flex-end"
}
const Navigation = () => {
  return (
    <nav style={styles} className='f4-ns f5 mr6-ns mr2'>
      <p className='mr5-ns mr2'>About</p>
      <p>Portfolio</p>
    </nav>
  );
};

export default Navigation;
