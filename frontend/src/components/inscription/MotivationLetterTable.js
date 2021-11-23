import React from "react";
import "./MotivationLetterTable.scss";

const MotivationLetterTable = () => {
    const pruebas1 = [
        {
            nombre: "Mafe Toro",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            dreams: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            calificacion: "4",
        },
        {
            nombre: "Zayda Rivera",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            dreams: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            calificacion: "4",
        },
        {
            nombre: "John Rojas",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            dreams: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            calificacion: "5",
        },
    ];

    return (
        <>
            <div className="section__Qualify">
                <div className="form">
                    <div className="section__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">¿Por qué quieres ser parte de Programate?</th>
                                    <th scope="col">Calificacion</th>
                                    <th scope="col">¿Cuales son tus sueños?</th>
                                    <th scope="col">Calificación</th>
                                    <th scope="col">Promedio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pruebas1.map((prueba) => (
                                    <tr>
                                        <th>{prueba.nombre}</th>
                                        <td>{prueba.motivation}</td>
                                        <td>
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
                                                <option value="1">5</option>
                                            </select>
                                        </td>
                                        <td>{prueba.dreams}</td>
                                        <td>
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
                                                <option value="1">5</option>
                                            </select>
                                        </td>
                                        <td>{prueba.calificacion}</td>
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

export default MotivationLetterTable;
