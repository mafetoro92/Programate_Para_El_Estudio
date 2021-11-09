import React from "react";
import "./AdministerTechnicalTest";

const AdministerTechnicalTestAdd = () => {
    return (
        <div className="section__administer">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Agregar prueba técnica</span>
                <div className="box__content">
                    <span>Programate</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span>Prueba técnica</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span>Administrar prueba técnica</span>
                </div>
            </div>
            <div className="section__form">
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
                        class="form-select"
                        aria-label="Default select example"
                    >
                        <option selected>Seleccione</option>
                        <option value="1">uno</option>
                        <option value="2">dos</option>
                        <option value="3">tres</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default AdministerTechnicalTestAdd;
