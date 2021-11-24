import React, { useEffect, useState } from "react";
import "./Aspirants.scss";
import Tablita from "../../components/tablita/Tablita";
import RequestService from "../../config/index";
import ModalAspirants from "../../components/modalAspirants/ModalAspirants";

const Aspirants = () => {
  const [aspirants, setAspirants] = useState([]);
  const getUser = async () => {
    const { data } = await RequestService.get("/candidate/profile");
    if (data) {
      setAspirants(data.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const actions = [
    {
      status: false,
      icon: <i className="far fa-check-square"> </i>,
    },
    {
      status: false,
      icon: <i className="far fa-edit"> </i>,
    },
    {
      status: true,
      icon: <i className="far fa-eye"> </i>,
    },
    {
      status: false,
      icon: <i className="far fa-trash-alt"> </i>,
    },
    {
      status: false,
      icon: <i class="fas fa-power-off"></i>,
  },
  ];

  const rows = aspirants.map((aspirant, idx) => ({
    ID: idx,
    Nombre: aspirant.Nombre,
    'Tipo de Documento': aspirant.TipoDocumento,
    'Numero de Documento': aspirant.NumeroDocumento,
    Correo: aspirant.Email,
    Telefono: aspirant.Telefono,
    Nacionalidad: aspirant.Nacionalidad,
    Departamento: aspirant.Departamento,
    Municipio: aspirant.Municipio,
    Estrato: aspirant.Estrato,
    Edad: aspirant.Edad,
    Genero: aspirant.Genero,
    Estado: <select>
    <option value="pasa">Pasa</option>
    <option value="nopasa">No pasa</option>
  </select>
  }));
  console.log(rows)
  return (
    <div className="section__aspirants">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold"> Aspirantes </span>
        <div className="box__content">
          <span className="text-crumbs bold-500"> Programate </span>
          <i className="fas fa-chevron-right subtitle" />
          <span className="text-crumbs"> Aspirantes </span>
        </div>
        <Tablita key={rows.length} rows={rows} actions={actions} />
        <ModalAspirants/>
      </div>
    </div>
  );
};

export default Aspirants;
