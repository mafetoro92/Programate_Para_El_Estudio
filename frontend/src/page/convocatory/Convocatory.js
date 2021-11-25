import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Tablita";
import "../../components/newConvocatory/EditCohort.jsx";
import DisableBtn from "../../components/disableBtn/DisableBtn";
import RequestService from "../../config/index";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";
import { Link } from "react-router-dom";
import ModalAspirants from "../../components/modalAspirants/ModalAspirants";

const Convocatory = () => {
    const [convocatories, setConvocatories] = useState([]);
    const getUser = async () => {
        const { data } = await RequestService.get("/admin/convocatories");
        if (data) {
            setConvocatories(data);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    // const [disable, setDisable] = useState(false);

    const actions = [
        {
            status: true,
            icon: (
                <Link to="/editarcohorte">
                    <i className="far fa-edit"></i>
                </Link>
            ),
        },
        {
            status: true,
            icon: <DisableBtn />,
        },
        {
            status: true,
            icon: <ModalAspirants />,
        },
    ];

    const fixDate = (date) => {
        return date.split("T")[0];
    };

    const rows = convocatories.map((conv, idx) => ({
        ID: idx,
        Nombre: conv.name,
        Cupos: conv.maxQuotas,
        "Fecha de Inicio": fixDate(conv.initialDate),
    }));

    return (
        <>
            <div className="section__convocatory">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold"> Convocatoria </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">Programate</span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs"> Convocatoria </span>
                    </div>
                </div>

                {rows.length > 0 ? (
                    <Tablita
                        className="table"
                        key={rows.length}
                        rows={rows}
                        actions={actions}
                    />
                ) : (
                    <NewConvocatory />
                )}
            </div>
        </>
    );
};

export default Convocatory;
