import React from "react";
import "./TechnicalTestAspirant.scss";


const TechnicalTestAspirant = () => {
  return (
    <>
      <div className="technical__test">
        <div className="technical__test-upload test">
          <h4 className="title__test">Descargar prueba tecnica</h4>
          <div className="content__test download">
            <p className="text__download">
              Dale clic en el boton para descargar la prueba técnica, y recuerda
              subir la solucion en el tiempo estipulado.
            </p>
            <div>
              <a href="" download="Prueba tecnica">
                <a href="https://drive.google.com/drive/folders/1nIhnp0tw-OiBJjtWTuRB3IHPJYz0hd7y?usp=sharing" target="_blank"><button type="button" class="btn btn-success">
                  Link prueba tecnica
                </button></a> 
              </a>
            </div>
          </div>
        </div>
        <div className="technical__test-download test">
          <h4 className="title__test">Cargar tu prueba tecnica</h4>
          <div className="content__test">
            <p className="text__upload">
              Por favor ingresa el link del drive de tu prueba tecnica y
              asegurate que se encuentre publico.
            </p>
          </div>
          <div className="form__upload">
            <form action="" method="POST" target="_blank">
              <p>Ingresa la URL:</p>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="https://drive.google.com/drive"
                  aria-label="Username"
                  aria-describedby="basic-addon1" required
                />
              </div>
              <input
                class="btn btn-success"
                type="submit"
                value="Enviar prueba"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalTestAspirant;
