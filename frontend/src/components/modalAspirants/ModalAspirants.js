import React from "react";
import "./ModalAspirants.scss";

const ModalAspirants = () => {
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
        },
    ];

    return (
        <div>
            <div className="btn">
                <a href="#aspirante">
                    <i className="far fa-eye"></i>
                </a>
            </div>
            <div id="aspirante" className="modalDialog">
                <div className="content">
                    <a href="#close" title="Close" class="close">
                        X
                    </a>
                    <h2>Datos del estudiante</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>Primer nombre: Pedro</p>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-item-left">
                            <p>Segundo nombre: Pedro</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>Primer apellido: Ayala</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Segundo apellido: Pedro</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Tipo de documento: CC</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Número de documento: 1026456789</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Fotocopia de documento de identidad: PDF</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Correo electónico: Pedro@gmail.com</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Telefono: 3002345678</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Nacionalidad: Colombia</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>¿Eres Migrante?: Si</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>¿Vives en Colombia?: Si</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Departamento de residencia: Bogotá</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Municipio de Residencia: Bogotá</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                Si resides en Bogotá, cual es tu localidad de
                                residencia: Puente Aranda
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Dirección: calle 11 # 17-09</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Estrato socioeconómico: 1</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Fecha de nacimiento: 23/09/1993</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Edad actual: 27</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Si cumple 18 años durante la formación, ingrese
                                la fecha de cumpleaños: 23/03/2021
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Sexo: Femenino</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>Estado Civil: soltera</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Máximo Nivel Académico Alcanzado: Técnico</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Si tu respuesta anterior fue técnico, tecnólogo
                                o grado universitario profesional cuéntanos ¿Qué
                                título obtuviste?: Tecnico en asistencia
                                administrativa
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                Actividad económica /ocupación actual:
                                Desempleado
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Si la respuesta anterior es "desempleado", ¿hace
                                cuánto tiempo te encuentras en dicha situación?:
                                Hace 1 año
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>¿Has tenido antes un empleo formal?: Si</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>¿Eres víctima del conflicto armado?: Si</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>¿Tienes acceso a un computador?: Si</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                ¿Cuántas veces has intentado ingresar a
                                "Prográmate"?: 2
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>Número del perfil de Sololearn: 456789</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                ¿Cuáles son tus principales sueños en la vida y
                                cómo la formación te aportará a cumplirlos?:
                                lorem lorem lorem
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                Cuéntanos en el siguiente espacio en un párrafo
                                de motivación ¿qué es prográmate para ti? ¿Qué
                                es lo que más te interesa de la metodología?
                                ¿Por qué quieres ser parte de Prográmate?: lorem
                                lorem
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                ¿Cuáles son tus principales sueños en la vida y
                                cómo la formación te aportará a cumplirlos?:
                                lorem lorem lorem
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAspirants;
