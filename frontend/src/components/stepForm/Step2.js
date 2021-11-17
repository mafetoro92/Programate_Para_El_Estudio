import React from "react";

const Step2 = ({ data, handeleChange }) => {

    const {
        migrant,
        liveColombia,
        department,
        municipality,
        locality,
        addres
      } = data;
  return (
    <>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">¿Eres Migrante?</label>
          <select
            name="migrant"
            onChange={handeleChange}
            value={migrant}
            className="form-select"
          >
            <option value="select">Selecciona si o no</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">¿Vives en Colombia?</label>
          <select
            name="liveColombia"
            onChange={handeleChange}
            value={liveColombia}
            className="form-select"
          >
            <option value="select">Selecciona si o no</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Departamento de residencia</label>
          <select
            name="department"
            onChange={handeleChange}
            value={department}
            className="form-select"
          >
            <option value="select">Selecciona tu Departamento</option>
            <option value="Cundinamarca">Cundinamarca</option>
            <option value="Guainía">Guainía</option>
            <option value="Guaviare">Guaviare</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Municipio de Residencia</label>
          <select
            name="municipality"
            onChange={handeleChange}
            value={municipality}
            className="form-select"
          >
            <option value="cc">Selecciona tu Municipio</option>
            <option value="Bogota">Bogota</option>
            <option value="Barranquilla">Barranquilla</option>
            <option value="Medellin">Medellin</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Si resides en Bogotá, cual es tu localidad de residencia
          </label>
          <select
            name="locality"
            onChange={handeleChange}
            value={locality}
            className="form-select"
          >
            <option value="cc">Selecciona tu localidad</option>
            <option value="La Candelaria">La Candelaria</option>
            <option value="Ciudad Bolívar">Ciudad Bolívar</option>
            <option value="Sumapaz">Sumapaz</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Dirección permanente/recurrent e de residencia
          </label>
          <input
            type="text"
            className="form-control"
            name="addres"
            onChange={handeleChange}
            value={addres}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
