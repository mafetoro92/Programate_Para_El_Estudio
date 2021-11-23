import React from "react";
import "./Parameterization.scss";


const Parameterization = () => {
<<<<<<< HEAD
  return (
    <>
      <div className="containerP">
        <div className="containerFirstSection">
          <div className="containerTitle">
            <h2>Parametrización</h2>
          </div>
          <div className="containerSelect">
            <select>
              <option>Regional</option>
              <option>Goyn</option>
              <option>Cohorte I</option>
              <option>Cohorte II</option>
            </select>
          </div>
        </div>
        <div className="containerSecondSection">
          <legend>Peso de las categorías</legend>
          <p>Estos valores son medidos en porcentanjes</p>
          <div className="containerForm">
            <div className="containerLabel">
              <label for="disabledTextInput" class="form-label">
                Edad
              </label>
              <input type="number" class="form-control" />
            </div>

            <div className="containerLabel">
              <label for="disabledSelect" class="form-label">
                Sololearn
              </label>
              <input type="number" class="form-control" />
            </div>

            <div className="containerLabel">
              <label for="disabledTextInput" class="form-label">
                Perfil personal
              </label>
              <input type="number" class="form-control" />
            </div>
          </div>

          <button className="button" type="submit" class="btn btn-primary">
            Guardar cambios
          </button>
        </div>
        <div className="containerThirdSection">
          <legend className="containerLegend">
            Parametrización de la evaluación del perfil
          </legend>
          <div className="containerGlobal">
            <div className="containerLabel">
              <label for="disabledSelect" class="form-label">
                Pais de residencia
              </label>
              <select id="disabledSelect" class="form-select">
                <option className="pickCountry">Colombia</option>
                <option>USA</option>
              </select>
            </div>
            <div className="containerLabel">
              <label for="disabledSelect" class="form-label">
                Departamento de residencia
              </label>
              <select id="disabledSelect" class="form-select">
                <option>Santander</option>
                <option>Valle</option>
              </select>
            </div>
          </div>

          <div className="containerGlobal">
            <div className="containerLabel">
              <label for="disabledTextInput" class="form-label">
                Edad
              </label>
              <input type="number" class="form-control" />
            </div>
            <div className="containerLabel">
              <label for="disabledSelect" class="form-label">
                Estrato
              </label>
              <select id="disabledSelect" class="form-select">
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
              <label for="disabledSelect" class="form-label">
                Población especial
              </label>
              <select id="disabledSelect" class="form-select">
                <option>Mujeres</option>
                <option>Victima de la violencia</option>
              </select>
            </div>
            <div className="containerLabel">
              <button className="button" type="submit" class="btn btn-primary">
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
=======

    return (

        <>
            <div className="containerP">
                <div className="containerFirstSection">
                <div className="containerTitle">
                    <h2>Parametrización</h2>
                </div>
                <div className="containerSelect">
                    <select>
                    <option>Regional</option>
                    <option>Goyn</option>
                    <option>Cohorte I</option>
                    <option>Cohorte II</option>
                    </select>
                </div>
                </div>
                <div className="containerSecondSection">
                <legend>Peso de las categorías</legend>
                <p>Estos valores son medidos en porcentanjes</p>
                <div className="containerForm">
                    <div className="containerLabel">
                    <label for="disabledTextInput" class="form-label">
                        Edad
                    </label>
                    <input type="number" class="form-control" />
                    </div>

                    <div className="containerLabel">
                    <label for="disabledSelect" class="form-label">
                        Sololearn
                    </label>
                    <input type="number" class="form-control" />
                    </div>

                    <div className="containerLabel">
                    <label for="disabledTextInput" class="form-label">
                        Perfil personal
                    </label>
                    <input type="number" class="form-control" />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">
                    Guardar cambios
                </button>
                </div>
            <div className="containerThirdSection">
                <legend className="containerLegend">
                    Parametrización de la evaluación del perfil
                </legend>
                <div className="containerGlobal">
                    <div className="containerLabel">
                        <label for="disabledSelect" class="form-label">
                            Pais de residencia
                        </label>
                        <select id="disabledSelect" class="form-select">
                            <option className="pickCountry">Colombia</option>
                            <option>USA</option>
                        </select>
                    </div>
                    <div className="containerLabel">
                        <label for="disabledSelect" class="form-label">
                            Departamento de residencia
                        </label>
                        <select id="disabledSelect" class="form-select">
                            <option>Santander</option>
                            <option>Valle</option>
                        </select>
                    </div>
                </div>

                <div className="containerGlobal">
                    <div className="containerLabel">
                        <label for="disabledTextInput" class="form-label">
                            Edad
                        </label>
                        <input type="number" class="form-control" />
                    </div>
                    <div className="containerLabel">
                        <label for="disabledSelect" class="form-label">
                            Estrato
                        </label>
                        <select id="disabledSelect" class="form-select">
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
                        <label for="disabledSelect" class="form-label">
                            Población especial
                        </label>
                        <select id="disabledSelect" class="form-select">
                            <option>Mujeres</option>
                            <option>Victima de la violencia</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                        Guardar cambios
                </button>
            </div>
        </div>
            </>
        );
        };

export default Parameterization;
>>>>>>> 1d2573069193d7b0c91f46b85ff67c9be2527d41
