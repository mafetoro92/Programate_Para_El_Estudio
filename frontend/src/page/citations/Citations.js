import React, { useEffect, useState } from "react";
import RequestService from "../../config/index";
import Citation from "../../components/citation/Citation";

const Citations = () => {
    const [citations, setCitations] = useState([]);
    const getCitation = async () => {
        const { data } = await RequestService.get("/admin/citation");
        if (data) {
            setCitations(data);
        }
    };

    useEffect(() => {
        getCitation();
        getUsers();
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
            status: false,
            icon: <i class="fas fa-power-off"></i>,
        },
    ];

    // const fixDate = (date) => {
    //     return date.split("T")[0];
    // };

    const [users, setUsers] = useState([]);

    const getUsers = async (users) => {
        for (let user in users) {
            const { data } = await RequestService.get(
                ` /candidate/profile/${user}`
            );
            if (data) {
                setUsers(data);
                console.log(users);
            }
        }
    };

    const rows = citations.map((conv, idx) => ({
        fecha: conv.date,
        jornada: conv.journy,
        users: getUsers(conv.users),
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
                <Citation rows={rows} />
            </div>
        </>
    );
};

export default Citations;
