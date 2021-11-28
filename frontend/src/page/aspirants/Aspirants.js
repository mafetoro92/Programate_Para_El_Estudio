import React, { useEffect, useState } from "react";
import "./Aspirants.scss";
import Tablita from "../../components/tablita/Tablita";
import RequestService from "../../config/index";
import ModalAspirants from "../../components/modals/ModalAspirants";

const Aspirants = () => {
    const [aspirants, setAspirants] = useState([]);
    const getUser = async () => {
        const { data } = await RequestService.get(
            "/candidate/candidate-profile/:id"
        );
        if (data) {
            setAspirants(data.data);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    const actions = [
        {
            status: true,
            icon: <ModalAspirants />,
        },
    ];

    const rows = aspirants.map((aspirant, idx) => ({
        ID: idx,
        Nombre: aspirant.fullName,
        "Tipo de Documento": aspirant.documentType,
        "Numero de Documento": aspirant.documentNumber,
        Correo: aspirant.email,
        Telefono: aspirant.secondContactNumber,
        Nacionalidad: aspirant.nacionality,
        Departamento: aspirant.residencyDepartment,
        Municipio: aspirant.municipalityOfResidency,
        Estrato: aspirant.socioeconomicStratus,
        Edad: aspirant.actualAge,
        Genero: aspirant.gender,
        Estado: (
            <select>
                <option value="pasa">Pasa</option>
                <option value="nopasa">No pasa</option>
            </select>
        ),
    }));

    return (
        <div className="spirants">
            <div className="spirants__content d-flex justify-content-between">
                <span className="upperCase bold"> Aspirantes </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Programate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs"> Aspirantes </span>
                </div>
            </div>
            <div className="mt-4">
                <Tablita key={rows.length} rows={rows} actions={actions} />
            </div>
        </div>
    );
};

export default Aspirants;
