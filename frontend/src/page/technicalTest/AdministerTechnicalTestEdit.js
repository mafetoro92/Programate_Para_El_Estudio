import React from "react";
import "./AdministerTechnicalTest";

const AdministerTechnicalTestEdit = () => {
    return (
        <div className="section__administer">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Editar prueba técnica</span>
                <div className="box__content">
                    <span>Programate</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span>Prueba técnica</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span>Administrar prueba técnica</span>
                </div>
            </div>


            <div className="form form-add m">
                <form action="">
                    <label htmlFor="">Puntaje</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="prueba_tecnica"
                        value=""
                    ></input>
                    
                    <button 
                class="btn btn-success"
                type="submit"
                value="Enviar prueba"
              >Guardar cambios</button>
                </form>
            </div>
           

            {/* <div className="form form-add m">
                <form action="">
                    <label htmlFor="">Prueba técnica</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="prueba_tecnica"
                        value=""
                    ></input>
                    <label htmlFor="">Link</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="link"
                        value=""
                    ></input>
                    <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                    >
                        <option selected>Seleccione</option>
                        <option value="1">uno</option>
                        <option value="2">dos</option>
                        <option value="3">tres</option>
                    </select>
                    <input
                        type="submit"
                        className="btn btn-primary edit"
                        value="Editar"
                    ></input>
                </form>
            </div> */}
        </div>
    );
};

export default AdministerTechnicalTestEdit;
