import React, { useContext, useEffect, useState } from "react";
import { providerContext } from "../../Context/status";
import "./Parameterization.scss";


const Parameterization = () => {
    const { getConvocatorys, convocatorys, convocatory, putParameterization, getConvocatory } = useContext(providerContext);
    const [datas, setDatas] = useState({
        parameterization: {
            personalProfile: 25,
            sololearn: 25,
            motivationLetter: 50
        },
        residenceCountry: "Colombia",
        residencyDepartment: "",
        maxAge: 35,
        maxSocioeconomicStratus: 3
    });
    const handleChangeB = (e) => {
        setDatas({
            ...datas,
            parameterization: {
                ...datas.parameterization,
                [e.target.name]: e.target.value
            }
        })

    }
    const handleChangeC = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        getConvocatorys()
    }, [])

    const handleChange = (e) => {
        const id = e.target.value
        getConvocatory(id);
    }

    const handleOn = (e) => {
        e.preventDefault();
        const data = datas
        const id = convocatory[0]._id
        const idS = convocatory[0]
        console.log(id)
        console.log(idS)
        if (id !== undefined) {
            putParameterization(id, data);
        } else {
            putParameterization(idS, data);
        }
    }
    const handleOn2 = (e) => {
        e.preventDefault();
        const data = datas
        const id = convocatory[0]._id
        const idS = convocatory[0]
        console.log(id)
        console.log(idS)
        if (id !== undefined) {
            putParameterization(id, data);
        }
        if (id === undefined) {
            putParameterization(idS, data);
        }
    }

    const [countries, setCountries] = useState([]);
    const getCountry = async () => {
        const url = "https://restcountries.com/v3.1/all";
        const request = await fetch(url);
        const countrie = await request.json();
        const countries = countrie.map((item) => item.name.common).sort();
        setCountries(countries);
    };
    useEffect(() => {
        getCountry();
    }, []);
    console.log(convocatorys)
    return (

        <>
            <div className="containerP">
                <div className="containerFirstSection">
                    <div className="containerTitle">
                        <h2>Parametrización</h2>
                    </div>
                    <div className="containerSelect">
                        <select onChange={(e) => handleChange(e)}>
                            <option>Seleciona una convocatoria</option>
                            {
                                convocatorys.map(conv => (
                                    <option key={conv._id}
                                        value={conv._id}
                                    >
                                        {conv.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <form className="containerSecondSection" onSubmit={handleOn}>
                    <legend>Peso de las categorías</legend>
                    <p>Estos valores son medidos en porcentanjes</p>
                    <div className="containerForm">
                        <div className="containerLabel">
                            <label
                                for="disabledTextInput"
                                class="form-label" >
                                Carta
                            </label>
                            <input type="number"
                                name="motivationLetter"
                                class="form-control"
                                onChange={handleChangeB}
                                value={datas.parameterization.motivationLetter}
                                placeholder={convocatory.maxAge} />
                        </div>

                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Sololearn
                            </label>
                            <input type="number" class="form-control" onChange={handleChangeB} name="sololearn" value={datas.parameterization.sololearn} />
                        </div>

                        <div className="containerLabel">
                            <label for="disabledTextInput" class="form-label">
                                Perfil personal
                            </label>
                            <input type="number" class="form-control" onChange={handleChangeB} name="personalProfile" value={datas.parameterization.personalProfile} />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" >
                        Guardar cambios
                    </button>
                </form>
                <form className="containerThirdSection" onSubmit={handleOn2}>
                    <legend className="containerLegend">
                        Parametrización de la evaluación del perfil
                    </legend>
                    <div className="containerGlobal">
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Pais de residencia
                            </label>
                            <select id="disabledSelect" class="form-select" onChange={handleChangeC} name="residenceCountry" value={datas.residenceCountry}>
                                {countries.map((countrie) => (
                                    <option key={countrie} value={countrie}>
                                        {countrie}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Departamento de residencia
                            </label>
                            <select id="disabledSelect" class="form-select" onChange={handleChangeC} name="residencyDepartment" value={datas.residencyDepartment}>
                                <option>Santander</option>
                                <option>Valle</option>
                            </select>
                        </div>
                    </div>

                    <div className="containerGlobal">
                        <div className="containerLabel">
                            <label for="disabledTextInput" class="form-label" >
                                Edad
                            </label>
                            <input type="number" class="form-control" onChange={handleChangeC} name="maxAge" value={datas.maxAge} />
                        </div>
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Estrato
                            </label>
                            <select id="disabledSelect" class="form-select" onChange={handleChangeC} name="maxSocioeconomicStratus" value={datas.maxSocioeconomicStratus}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Guardar cambios
                    </button>
                </form>

            </div>
        </>
    );
};

export default Parameterization;