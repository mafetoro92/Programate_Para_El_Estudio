import React from "react";
import TableConvocatory from "../../components/tables/TableConvocatory";
//import Button from '@mui/material/Button';
import "./Convocatory.scss";


const Convocatory = () => {
  return (
    <>
      <div className="convocatory">
        <div className="convocatory__content mb-5 d-flex justify-content-between">
          <span className="upperCase bold">Convocatorias</span>
          <div className="box__content">
            <span className="text-crumbs bold-500">Programate</span>
            <i class="fas fa-chevron-right subtitle" />
            <span className="text-crumbs">Convocatoria</span>
          </div>
        </div>
        <TableConvocatory />
      </div>
    </>
  );
};

export default Convocatory;
