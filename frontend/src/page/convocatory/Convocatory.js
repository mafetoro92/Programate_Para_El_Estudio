import React from "react";
import Tablita from "../../components/tablita/Tablita";
import "./Convocatory.scss";

const Convocatory = () => {
  const actions = [
    {
      status: false,
      icon: <i className="far fa-check-square"> </i>,
    },
    {
      status: true,
      icon: <i className="far fa-trash-alt"> </i>,
    },
    {
      status: true,
      icon: <i className="far fa-eye"> </i>,
    },
  ];

  function createData(id, nombre, cupos, FechaInicio) {
    return {
      id,
      nombre,
      cupos,
      FechaInicio,
    };
  }

  const rows = [
    createData(0, "Daniel Lorenzo", 31, "15/11/2021"),
    createData(1, "David Bedoya", 23, "15/11/2021"),
    createData(2, "Mafe Toro", 28, "15/11/2021"),
    createData(3, "Diego Romero", 23, "15/11/2021"),
  ];

  return (
    <>
      <div className="section__convocatory">
        <div className="section__content d-flex justify-content-between">
          <span className="upperCase bold"> Convocatoria </span>{" "}
          <div className="box__content">
            <span className="text-crumbs bold-500"> Programate </span>{" "}
            <i className="fas fa-chevron-right subtitle" />
            <span className="text-crumbs"> Convocatoria </span>{" "}
          </div>{" "}
        </div>{" "}
        <Tablita rows={rows} actions={actions} />{" "}
      </div>{" "}
    </>
  );
  // return (
  //   <>
  //     <div className="section__convocatory">
  //       <div className="section__content mb-5 d-flex justify-content-between">
  //         <span className="upperCase bold">Convocatorias</span>
  //         <div className="box__content">
  //           <span className="text-crumbs bold-500">Programate</span>
  //           <i class="fas fa-chevron-right subtitle" />
  //           <span className="text-crumbs">Convocatoria</span>
  //         </div>
  //       </div>
  //       <TableConvocatory />
  //     </div>
  //   </>
  // );
};

export default Convocatory;
