import React, { Profiler, useContext, useEffect } from "react";
import { providerContext } from "../../Context/status";
import "./MotivationLetterTable.scss";

const MotivationLetterTable = () => {
    const { getProfiles, getAcept, profiles, } = useContext(providerContext);
    useEffect(() => {
        getProfiles()
        getAcept()
    }, [])
    let profile = []
    for (let i of profiles) {

        profile = [...profile, i]

    }

    return (
        <>
            <div className="qualify">
                <div className="qualify__content d-flex justify-content-between">
                    <span className="upperCase bold"> Carta Motvation </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500"> Programate </span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs"> Aspirantes </span>
                    </div>
                </div>
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
                                {profile.map(profile => (
                                    <tr key={profile.user_id} >
                                        <th></th>
                                        <td>{profile.motivation}</td>
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
                                        <td>{profile.dreams}</td>
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
                                        <td></td>
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
