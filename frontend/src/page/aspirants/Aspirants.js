import React from "react";
import "./Aspirants.scss";

const Aspirants = () => {
  return (
    <div className="section__aspirants">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">Aspirantes</span>
        <div className="box__content">
          <span>Programate</span>
          <i class="fas fa-chevron-right subtitle" />
          <span>Aspirantes</span>
        </div>
      </div>
    </div>
  );
};

export default Aspirants;