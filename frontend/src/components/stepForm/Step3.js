import React from "react";

const Step3 = ({ data, handeleChange }) => {

    const {
        stratum,
        birth,
        age,
        birthTwo,
        sex,
        status,
        academicLevel,
        title,
        occupation,
        unemployed,
        employment,
        armedConflict,
        computer,
        logProgramate,
        accesComputer,
        profileSololearn,
        dreams,
        motivation
      } = data;
  return (
    <>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Estrato socioeconómico</label>
          <select
            name="stratum"
            onChange={handeleChange}
            value={stratum}
            className="form-select"
          >
            <option value="cc">Selecciona tu Estrato</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            name="birth"
            onChange={handeleChange}
            value={birth}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Edad actual
          </label>
          <input
            type="date"
            className="form-control"
            name="age"
            onChange={handeleChange}
            value={age}
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Si cumple 18 años durante la formación, ingrese la fecha de
            cumpleaños
          </label>
          <input
            type="date"
            className="form-control"
            name="birthTwo"
            onChange={handeleChange}
            value={birthTwo}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">sexo</label>
          <select
            name="sex"
            onChange={handeleChange}
            value={sex}
            className="form-select"
          >
            <option value="cc">Selecciona tu Sexo</option>
            <option value="masculino">masculino</option>
            <option value="femenino">femenino</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Estado Civil</label>
          <select
            name="status"
            onChange={handeleChange}
            value={status}
            className="form-select"
          >
            <option value="cc">Selecciona tu Estado Civil</option>
            <option value="Soltero">Soltero</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Union libre">Union libre</option>
            <option value="Casado">Casado</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Máximo Nivel Académico Alcanzado</label>
          <select
            name="academicLevel"
            onChange={handeleChange}
            value={academicLevel}
            className="form-select"
          >
            <option value="cc">Selecciona tu Nivel Académico</option>
            <option value="Bachiller">Bachiller</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Grado">Grado</option>
            <option value="Universitario">Universitario</option>
            <option value="Profesional">Profesional</option>
            <option value="Especialista">Especialista</option>
            <option value="Maestría">Maestría</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Si tu respuesta anterior fue técnico, tecnólogo o grado
            universitario profesional cuéntanos ¿Qué título obtuviste?
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handeleChange}
            value={title}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Actividad económica /ocupación actual
          </label>
          <select
            name="occupation"
            onChange={handeleChange}
            value={occupation}
            className="form-select"
          >
            <option value="cc">Selecciona tu Ocupación</option>
            <option value="Desempleado">Desempleado</option>
            <option value="Empleado">Empleado</option>
            <option value="Independiente">Independiente</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Si la respuesta anterior es "desempleado", ¿hace cuánto tiempo te
            encuentras en dicha situación?
          </label>
          <input
            type="text"
            className="form-control"
            name="unemployed"
            onChange={handeleChange}
            value={unemployed}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Has tenido antes un empleo formal (con contrato)?
          </label>
          <select
            name="employment"
            onChange={handeleChange}
            value={employment}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Eres víctima del conflicto armado?
          </label>
          <select
            name="armedConflict"
            onChange={handeleChange}
            value={armedConflict}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">¿Tienes acceso a un computador?</label>
          <select
            name="computer"
            onChange={handeleChange}
            value={computer}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Cuántas veces has intentado ingresar a "Prográmate"?
          </label>
          <input
            type="number"
            className="form-control"
            name="logProgramate"
            onChange={handeleChange}
            value={logProgramate}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Número del perfil de Sololearn</label>
          <input
            type="number"
            className="form-control"
            name="profileSololearn"
            onChange={handeleChange}
            value={profileSololearn}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Cuáles son tus principales sueños en la vida y cómo la formación te
            aportará a cumplirlos?
          </label>
          <textarea
            type="text"
            className="form-control"
            name="dreams"
            onChange={handeleChange}
            value={dreams}
          ></textarea>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Cuéntanos en el siguiente espacio en un párrafo de motivación ¿qué
            es prográmate para ti? ¿Qué es lo que más te interesa de la
            metodología? ¿Por qué quieres ser parte de Prográmate?
          </label>
          <textarea
            type="text"
            className="form-control"
            name="motivation"
            onChange={handeleChange}
            value={motivation}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Step3;
