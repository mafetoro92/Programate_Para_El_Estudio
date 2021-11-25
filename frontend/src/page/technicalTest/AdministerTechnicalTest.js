import React from "react";
import { Link } from "react-router-dom";
import "./AdministerTechnicalTest.scss";
import Swal from "sweetalert2";
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

    const modalDelete = () => {
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Se eliminará de forma permanente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#92C149",
            cancelButtonColor: "#DF2626",
            denyButtonColor: "grey",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Registro eliminado!",
                    icon: "success",
                    confirmButtonColor: "#92C149",
                });
            }
        });
    };

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
                <div className="form">
                    <Link to="/administertechnicaltestadd">
                        <div>
                            <button className="btn btn-primary add">
                                Agregar
                            </button>
                        </div>
                    </Link>
                    <div className="section__table table">
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
                                            <div className="buttom d-flex justify-content-center align-items-center">
                                                <Link to="/administertechnicaltestedit">
                                                    <button className="btn btn-success">
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        prueba.id &&
                                                        modalDelete(prueba.id)
                                                    }
                                                    className="btn btn-info"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdministerTechnicalTest;