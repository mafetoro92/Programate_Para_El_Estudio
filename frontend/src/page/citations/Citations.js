import React, { useEffect, useState } from 'react'
import RequestService from "../../config/index";
import Tablita from "../../components/tablita/Tablita";
import Citation from '../../components/citation/Citation';


const Citations = () => {
    const [citations, setCitations] = useState([]);
    const getUser = async () => {
        const { data } = await RequestService.get("/admin/citation");
        if (data) {
            setCitations(data);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const actions = [
        {
            status: true,
            icon: <i className="far fa-check-square"> </i>,
        },
        {
            status: true,
            icon: <i className="far fa-edit"></i>,
        },
        {
            status: false,
            icon: <i className="far fa-eye"> </i>,
        },
        {
            status: false,
            icon: <i className="far fa-trash-alt"> </i>,
        },
        {
            status: true,
            icon: <i class="fas fa-power-off"></i>,
        },
    ];

    // const fixDate = (date) => {
    //     return date.split("T")[0];
    // };

    const rows = citations.map((conv, idx) => ({
        ID: idx,
        Nombre: conv.name,
        Cupos: conv.maxQuotas,
        //"Fecha de Inicio": fixDate(conv.initialDate),
    }));
    console.log(rows)
    return (
        <>
            <div className="section__convocatory">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold"> Convocatoria </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">
                            Programate
                        </span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs"> Convocatoria </span>
                    </div>
                </div>
                    <Citation />
            </div>
        </>
    )
}

export default Citations
