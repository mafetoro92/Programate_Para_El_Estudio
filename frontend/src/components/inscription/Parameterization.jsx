import React from "react";
import "./Parameterization.scss";

const Parameterization = () => {
  return (
    <>
      <div className="containerP">
        <div className="containerFirstSection">
          <div className="box__title">
            <h2>Parametrización</h2>
          </div>
          <div className="select">
            <select>
              <option>Regional</option>
              <option>Goyn</option>
              <option>Cohorte I</option>
              <option>Cohorte II</option>
            </select>
          </div>
        </div>
        <div className="second__section">
          <div className="text__content">
            <h4 className="text__content-subtitle">Peso de las categorías</h4>
            <p className="text__content-text">
              Estos valores son medidos en porcentanjes
            </p>
          </div>
          <div className="box__inputs" >
            <div className="inputs">
              <div className="mb-4">
                <label className="form-label">Perfil personal</label>
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="inputs">
              <div className="mb-4">
                <label className="form-label">SoloLearn</label>
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="inputs">
              <div className="mb-4">
                <label className="form-label">Carta de motivación</label>
                <input type="number" className="form-control" />
              </div>
            </div>
          </div>
        
          <button className="button" type="submit" className="mb-4 btn btn-success">
            Guardar cambios
          </button>
        </div>

        <div className="containerThirdSection">
          <legend className="containerLegend">
            <h4>Parametrización de la evaluación del perfil</h4>
          </legend>
          <div className="containerGlobal">
            <div className="containerLabel">
              <label htmlFor="disabledSelect" className="form-label fs-4">
                Pais de residencia
              </label>
              <select id="disabledSelect" className="form-select">
                <option className="pickCountry">Colombia</option>
                <option>USA</option>
              </select>
            </div>
            <div className="containerLabel">
              <label htmlFor="disabledSelect" className="form-label fs-4">
                Dto. residencia
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Santander</option>
                <option>Valle</option>
              </select>
            </div>
          </div>

          <div className="containerGlobal">
            <div className="containerLabel">
              <label htmlFor="disabledTextInput" className="form-label fs-4">
                Edad
              </label>
              <input type="number" className="form-control" />
            </div>
            <div className="containerLabel">
              <label htmlFor="disabledSelect" className="form-label fs-4">
                Estrato
              </label>
              <select id="disabledSelect" className="form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>

          <div className="containerGlobal">
            <div className="containerLabel">
              <label htmlFor="disabledSelect" className="form-label fs-4">
                Población especial
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Mujeres</option>
                <option>Victima de la violencia</option>
              </select>
            </div>
            <div className="containerLabel">
              <button className="button" type="submit" className="btn btn-success mt-5 fs-5">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parameterization;
