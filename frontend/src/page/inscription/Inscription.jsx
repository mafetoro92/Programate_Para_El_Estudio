import React from 'react';
import "./Inscription.scss"
import Parameterization from "../../components/inscription/Parameterization"


const Inscription = () => {
  return (
    <>
      <div className="section__convocatory">
        <div className="section__content mb-5 d-flex justify-content-between">
          <span className="upperCase bold">Convocatorias</span>
          <div className="box__content">
            <span className="text-crumbs bold-500">Programate</span>
            <i class="fas fa-chevron-right subtitle" />
            <span className="text-crumbs">Convocatoria</span>
          </div>
        </div>
        <Parameterization />
        {/* <TableConvocatory /> */}
      </div>
    </>
  )
}

export default Inscription
