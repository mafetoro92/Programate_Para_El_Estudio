import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./AdministerTechnicalTest.scss";
import Swal from "sweetalert2";
import modalDelete from "../../components/alert/alert";
import alert from "../../components/alert/alert";
import Search from "../../components/search/Search";

const AdministerTechnicalTest = () => {

    const [prueba, setPrueba] = useState([])
    const [value, setValue] = useState([])

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


    const listPruebas = async () => {
        try {
            const res = pruebas1;
            //const pruebas1 = res.json()
            setPrueba(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listPruebas();
    }, [])


    const handeleChange = (e) => {
        if (e.target.value) {
            const filterData = pruebas1.filter(prueba => {
                if (prueba.pruebaTecnica.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true
                }
                return false
            });
            setPrueba(filterData)
        }
        setValue(e.target.value)
    }


    return (
        <>
            <div className="section__administer">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold">
                        Administrar prueba técnica
                    </span>
                    <div className="box__content">
                        <span>Programate</span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span>Prueba técnica</span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span>Administrar prueba técnica</span>
                    </div>
                </div>
                
                <div>
                    <Search handeleChange={handeleChange} value={value} />
                </div>

                <div className="form">
                    <Link to="/agregar">

                    {/* <button className="btn btn-primary add">
                                Agregar
                            </button> */}

                        <div>
                            <button className="btn btn-success">Agregar</button>
                        </div>
                    </Link>
                    <div className="section__table table">
                        <table className="table">
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
                                {pruebas1.map((prueba, index) => (
                                    <tr key={index}>
                                        <th scope="row">{prueba.id}</th>
                                        <td>{prueba.pruebaTecnica}</td>
                                        <td>{prueba.link}</td>
                                        <td>{prueba.convocatoria}</td>
                                        <td>
                                            {/* Commit before */}
                                        {/* <div className="buttom d-flex justify-content-center align-items-center">
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
                                                    className="btn btn-danger"
                                                >
                                                    <i className="fas fa-trash"></i> */}


                                            <Link to="/editar">
                                                <button className="btn btn-success">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={modalDelete}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
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