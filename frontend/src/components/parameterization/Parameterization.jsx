import React, { useContext, useEffect, useState } from "react";
import { providerContext } from "../../Context/status";
import "./Parameterization.scss";


const Parameterization = () => {
    const { getConvocatorys, convocatorys, putParameterization, convocatory } = useContext(providerContext);
    const [paramNum, setParamNum] = useState({
        parameterization: {
            personalProfile: "",
            sololearn: "",
            motivationLetter: "",
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setParamNum({
            ...paramNum,
            [name]: value
        })
    }
    const onSubmit1 = (e) => {
        e.preventDefault();
        setParamNum()
    }

    useEffect(() => {
        getConvocatorys()
    }, [])

    useEffect(() => {
        const paramFound = paramNum.find(param => param.id === param.id);
        if (paramFound) {
            setParamNum({
                _id: paramFound.id,
                parameterization: {
                    personalProfile: paramFound.personalProfile,
                    sololearn: paramFound.sololearn,
                    motivationLetter: paramFound.motivationLetter,
                },
            });
        }
    }, [paramNum._id, paramNum]);
    console.log(convocatorys)
    return (

        <>
            <div className="containerP">
                <div className="containerFirstSection">
                    <div className="containerTitle">
                        <h2>Parametrización</h2>
                    </div>
                    <div className="containerSelect">
                        <select >
                            <option>Seleciona una convocatoria</option>
                            {
                                convocatorys.map(conv => (
                                    <option key={conv._id}
                                        onClick={() => putParameterization(conv._id)}
                                    >
                                        {conv.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <form className="containerSecondSection" onSubmit={onSubmit1}>
                    <legend>Peso de las categorías</legend>
                    <p>Estos valores son medidos en porcentanjes</p>
                    <div className="containerForm">
                        <div className="containerLabel">
                            <label
                                for="disabledTextInput"
                                class="form-label" >
                                Edad
                            </label>
                            <input type="number"
                                class="form-control"
                                onChange={handleChange}
                                placeholder={convocatory.maxAge} />
                        </div>

                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Sololearn
                            </label>
                            <input type="number" class="form-control" />
                        </div>

                        <div className="containerLabel">
                            <label for="disabledTextInput" class="form-label">
                                Perfil personal
                            </label>
                            <input type="number" class="form-control" />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Guardar cambios
                    </button>
                </form>
                <div className="containerThirdSection">
                    <legend className="containerLegend">
                        Parametrización de la evaluación del perfil
                    </legend>
                    <div className="containerGlobal">
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Pais de residencia
                            </label>
                            <select id="disabledSelect" class="form-select">
                                <option className="pickCountry">Colombia</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Departamento de residencia
                            </label>
                            <select id="disabledSelect" class="form-select">
                                <option>Santander</option>
                                <option>Valle</option>
                            </select>
                        </div>
                    </div>

                    <div className="containerGlobal">
                        <div className="containerLabel">
                            <label for="disabledTextInput" class="form-label">
                                Edad
                            </label>
                            <input type="number" class="form-control" />
                        </div>
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Estrato
                            </label>
                            <select id="disabledSelect" class="form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                    </div>

                    <div className="containerGlobal">
                        <div className="containerLabel">
                            <label for="disabledSelect" class="form-label">
                                Población especial
                            </label>
                            <select id="disabledSelect" class="form-select">
                                <option>Mujeres</option>
                                <option>Victima de la violencia</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Guardar cambios
                    </button>
                </div>

            </div>
        </>
    );
};

export default Parameterization;