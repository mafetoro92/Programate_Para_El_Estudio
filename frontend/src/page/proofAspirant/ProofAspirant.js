import React from "react";
import './ProofAspirant.scss'

const ProofAspirant = () => {
  return (
    <div className="section__proof">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">
          Prueba Tecnica Aspirante
        </span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i class="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Prueba</span>
        </div>
      </div>
    </div>
  );
};

export default ProofAspirant;
