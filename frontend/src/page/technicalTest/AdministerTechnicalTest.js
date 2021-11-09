import React from "react";
import { Link } from "react-router-dom";
import "./AdministerTechnicalTest.scss";
const AdministerTechnicalTest = () => {
    const pruebas1 = [
        {
            id: 1,
            pruebaTecnica: "prueba tecnica1",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
        },
        {
            id: 2,
            pruebaTecnica: "prueba tecnica2",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
        },
        {
            id: 3,
            pruebaTecnica: "prueba tecnica3",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
        },
    ];

    return (
        <>
            <div className="section__administer">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold">
                        Administrar prueba técnica
                    </span>
                    <div className="box__content">
                        <span>Programate</span>
                        <i class="fas fa-chevron-right subtitle" />
                        <span>Prueba técnica</span>
                        <i class="fas fa-chevron-right subtitle" />
                        <span>Administrar prueba técnica</span>
                    </div>
                </div>
                <Link to="/administrar-prueba-tecnica/agregar">
                    <div>
                        <button className="btn btn-primary">Agregar</button>
                    </div>
                </Link>
                <div className="section__table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Prueba técnica</th>
                                <th scope="col">Link</th>
                                <th scope="col">Convocatoria</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pruebas1.map((prueba) => (
                                <tr>
                                    <th scope="row">{prueba.id}</th>
                                    <td>{prueba.pruebaTecnica}</td>
                                    <td>{prueba.link}</td>
                                    <td>{prueba.convocatoria}</td>
                                    <td>
                                        <button className="btn btn-success">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdministerTechnicalTest;
