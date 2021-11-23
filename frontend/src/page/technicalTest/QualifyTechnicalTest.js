import React from "react";
import "./QualifyTechnicalTest.scss";

const QualifyTechnicalTest = () => {
    const pruebas1 = [
        {
            id: 1,
            nombre: "nombre1",
            pruebaTecnica: "prueba tecnica1",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
            calificacion: "",
        },
        {
            id: 2,
            nombre: "nombre2",
            pruebaTecnica: "prueba tecnica2",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
            calificacion: "",
        },
        {
            id: 3,
            nombre: "nombre3",
            pruebaTecnica: "prueba tecnica3",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
            calificacion: 2.5,
        },
    ];

    return (
        <>
            <div className="section__Qualify">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold">
                        Calificar prueba técnica
                    </span>
                    <div className="box__content">
                        <span>Programate</span>
                        <i class="fas fa-chevron-right subtitle" />
                        <span>Prueba técnica</span>
                        <i class="fas fa-chevron-right subtitle" />
                        <span>Calificar prueba técnica</span>
                    </div>
                </div>
                <div className="form">
                    <div className="section__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre aspirante</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Convocatoria</th>
                                    <th scope="col">Calificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pruebas1.map((prueba) => (
                                    <tr>
                                        <th scope="row">{prueba.id}</th>
                                        <td>{prueba.nombre}</td>
                                        <td>{prueba.link}</td>
                                        <td>{prueba.convocatoria}</td>
                                        <td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
                                        <select
                                                    name="qualify"
                                                    className="form-select"
                                                >
                                                    <option value="select">
                                                        Selecione una opción
                                                    </option>
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                </select>
<<<<<<< HEAD
=======
                                            {prueba.calificacion == "" ? (
                                                <button className="btn btn-primary">
                                                    calificacion
                                                </button>
                                            ) : (
                                                <div className="btn_edit">
                                                    {prueba.calificacion}

                                                    <button className="btn btn-success">
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </div>
                                            )}
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
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

export default QualifyTechnicalTest;
