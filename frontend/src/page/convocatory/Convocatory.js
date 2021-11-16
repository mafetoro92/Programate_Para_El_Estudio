import React from "react";
<<<<<<< HEAD
import TableConvocatory from "../../components/tables/TableConvocatory";
//import Button from '@mui/material/Button';
=======
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
import "./Convocatory.scss";


const Convocatory = () => {
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
        <TableConvocatory />
      </div>
    </>
  );
};

export default Convocatory;
