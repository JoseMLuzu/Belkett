import React from "react";

import "../../styles/Jumbotron.css";

function Jumbotron({ title, backgroundImage }) {
  return (
    <section
      className="jumbotron bg-gray-800"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="jumboImg px-4 text-center">
        <h1 className=" fontt text-white font-extrabold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default Jumbotron;
