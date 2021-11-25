import React from "react";
import "./Modal.scss";

const ModalConvocatory = () => {
    return (
        <div>
            <div className="btn">
                <a href="#aspirante">Leer mas..</a>
            </div>
            <div id="aspirante" className="modalDialog1">
                <div className="content">
                    <a href="#close" title="Close" className="closeA">
                        X
                    </a>
                    <h2>Datos del estudiante</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                <em>Primer nombre:</em> Pedro
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-item-left">
                            <p>
                                <em>Segundo nombre:</em> Pedro
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                <em>Primer apellido:</em> Ayala
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Segundo apellido:</em> Pedro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalConvocatory;
