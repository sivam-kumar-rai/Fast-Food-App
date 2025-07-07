import React from "react";

function footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {year}</p>
    </footer>
  );
}
export default footer;
