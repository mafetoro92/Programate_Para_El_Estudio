import React from "react";
import "./Modal.scss";

const MotivationLetterModal = () => {
    const aspirante1 = [
        {
            user_id: 1,
            firstName: "Pedro",
            secondName: "",
            firstSurname: "Ayala",
            secondSurname: "",
            document: "",
            numberDocument: "",
            pdf: "",
            email: "",
            phone: "",
            nationality: "",
            migrant: "",
            liveColombia: "",
            department: "",
            municipality: "",
            locality: "",
            addres: "",
            stratum: "",
            birth: "",
            age: "",
            birthTwo: "",
            sex: "",
            status: "",
            academicLevel: "",
            title: "",
            occupation: "",
            unemployed: "",
            employment: "",
            armedConflict: "",
            computer: "",
            logProgramate: "",
            accesComputer: "",
            profileSololearn: "",
            dreams: "",
            motivation: "",
            htmlScore: "",
            cssScore: "",
            javascriptScore: "",
            pythonScore: "",
            soloLearnScore: "",
        },
    ];

    return (
        <div>
            <button>
                <a href="#aspirante">
                    <i className="far fa-eye"> </i>
                </a>
            </button>
            <div id="aspirante" className="modalDialog">
                <div className="content">
                    <a href="#close" title="Close" className="close">
                        X
                    </a>
                    <h2>Datos del estudiante</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                <em>Primer nombre:</em> Pedro
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-item-left">
                            <p>
                                <em>Segundo nombre:</em> Andr??s
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                <em>Primer apellido:</em> Ayala
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Segundo apellido:</em> Casas
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Tipo de documento:</em> CC
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>N??mero de documento:</em> 1026456789
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Fotocopia de documento de identidad:</em>{" "}
                                PDF
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Correo elect??nico:</em> Pedro@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Telefono:</em> 3002345678
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Nacionalidad:</em> Colombia
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>??Eres Migrante?:</em> Si
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>??Vives en Colombia?:</em> Si
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Departamento de residencia:</em> Bogot??
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Municipio de Residencia:</em> Bogot??
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si resides en Bogot??, cual es tu localidad
                                    de residencia:
                                </em>{" "}
                                Puente Aranda
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Direcci??n:</em> calle 11 # 17-09
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Estrato socioecon??mico:</em> 1
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Fecha de nacimiento:</em> 23/09/1993
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Edad actual:</em> 27
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si cumple 18 a??os durante la formaci??n,
                                    ingrese la fecha de cumplea??os:
                                </em>{" "}
                                23/03/2021
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Sexo:</em> Femenino
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Estado Civil:</em> soltera
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>M??ximo Nivel Acad??mico Alcanzado</em>:
                                T??cnico
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si tu respuesta anterior fue t??cnico,
                                    tecn??logo o grado universitario profesional
                                    cu??ntanos ??Qu?? t??tulo obtuviste?:
                                </em>{" "}
                                Tecnico en asistencia administrativa
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Actividad econ??mica /ocupaci??n actual:</em>
                                Desempleado
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si la respuesta anterior es "desempleado",
                                    ??hace cu??nto tiempo te encuentras en dicha
                                    situaci??n?:
                                </em>
                                Hace 1 a??o
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>??Has tenido antes un empleo formal?:</em> Si
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>??Eres v??ctima del conflicto armado?:</em> Si
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>??Tienes acceso a un computador?:</em> Si
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Cu??ntas veces has intentado ingresar a
                                    "Progr??mate"?
                                </em>
                                : 2
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>N??mero del perfil de Sololearn: </em> 456789
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Cu??les son tus principales sue??os en la
                                    vida y c??mo la formaci??n te aportar?? a
                                    cumplirlos?:
                                </em>
                                lorem lorem lorem
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Porcentaje de cumplimiento Html Sololearn?:
                                </em>
                                65%
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Porcentaje de cumplimiento Css Sololearn?:
                                </em>
                                79%
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Porcentaje de cumplimiento Javascript
                                    Sololearn?:
                                </em>
                                75%
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Porcentaje de cumplimiento Python
                                    Sololearn?:
                                </em>
                                80%
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ??Cu??les son tus principales sue??os en la
                                    vida y c??mo la formaci??n te aportar?? a
                                    cumplirlos?:
                                </em>
                                lorem lorem lorem
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotivationLetterModal;
