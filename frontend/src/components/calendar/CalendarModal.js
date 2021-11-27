import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import DateTimePicker from "react-datetime-picker";
import Swal from "sweetalert2";
import { customStyles } from "../../helpers/center-modal";
import { useSelector } from "react-redux";
import "./Calendar.scss";
import { useDispatch } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import {
    eventClearActiveEvent,
    eventStartAddNew,
    updateEvents,
} from "../../actions/events";

Modal.setAppElement("#app");

const now = moment().minutes(0).seconds(0).add(1, "hours");
const endPlus = now.clone().add(1, "hours");

const initEvent = {
    title: "",
    notes: "",
    start: now.toDate(),
    end: endPlus.toDate(),
    link: "",
    quotas: 0,
};

const CalendarModal = () => {

    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth

    // Trae el estado de la aplicacion de ui
    const { modalOpen } = useSelector((state) => state.ui);
    const { activeEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(endPlus.toDate());
    const [ErrorTitle, setErrorTitle] = useState(true);
    const [aplication, setAplication] = useState(false);

    const [fomrValues, setFomrValues] = useState(initEvent);

    const { title, notes, start, end, link, quotas } = fomrValues;

    useEffect(() => {
        if (activeEvent) {
            setFomrValues(activeEvent);
        }
    }, [activeEvent, setFomrValues]);

    const closeModal = () => {
        dispatch(uiCloseModal());
        setFomrValues(initEvent);
        dispatch(eventClearActiveEvent());
    };

    const handleStartDataChange = (e) => {
        setDateStart(e);
        setFomrValues({
            ...fomrValues,
            start: e,
        });
    };
    const handleEndDataChange = (e) => {
        setDateEnd(e);
        setFomrValues({
            ...fomrValues,
            end: e,
        });
    };

    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setFomrValues({
            ...fomrValues,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);
        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire(
                "Error",
                "La fecha fin debe ser mayor a la fecha inicio",
                "error"
            );
        }
        if (title.trim().length < 2) {
            setErrorTitle(false);
            return;
        }

        if (activeEvent) {
            dispatch(updateEvents(fomrValues));
        } else {
            dispatch(eventStartAddNew(fomrValues));
        }

        setErrorTitle(true);
        closeModal();
    };

    const handleClick = () => {
        console.log("Aplicaste");
        setAplication(true);
    };

    DateTimePicker.CustomFormat = "MM/dd/yyyy hh:mm:ss";
    return (
        <>
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
            >
                {isAdmin && isLogged && (
                    <>
                        <h1 className="text-center"> Nuevo evento </h1>
                        <hr />
                        <form className="container">
                            <div className="form-group">
                                <label>Fecha y hora inicio</label>
                                <DateTimePicker
                                    format="y-MM-dd h:mm a"
                                    onChange={handleStartDataChange}
                                    value={dateStart}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label>Fecha y hora fin</label>
                                <DateTimePicker
                                    format="y-MM-dd h:mm a"
                                    onChange={handleEndDataChange}
                                    value={dateEnd}
                                    minDate={dateStart}
                                    className="form-control"
                                />
                            </div>

                            <hr />
                            <div className="form-group">
                                <label>Titulo</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        !ErrorTitle && "is-invalid"
                                    }`}
                                    placeholder="Título del evento"
                                    name="title"
                                    autoComplete="off"
                                    onChange={handelInputChange}
                                    value={title}
                                />
                            </div>

                            <div className="form-group mt-2">
                                <label>Link</label>
                                <input
                                    type="url"
                                    className={`form-control ${
                                        !ErrorTitle && "is-invalid"
                                    }`}
                                    placeholder="Link del evento"
                                    name="link"
                                    autoComplete="off"
                                    onChange={handelInputChange}
                                    value={link}
                                />
                            </div>

                            <div className="form-group mt-2">
                                <label>Cupos</label>
                                <input
                                    type="number"
                                    className={`form-control ${
                                        !ErrorTitle && "is-invalid"
                                    }`}
                                    placeholder="Cupos del evento"
                                    name="quotas"
                                    autoComplete="off"
                                    onChange={handelInputChange}
                                    value={quotas}
                                />
                            </div>

                            <div className="form-group mt-2">
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    Una descripción corta
                                </small>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Notas"
                                    rows="5"
                                    name="notes"
                                    onChange={handelInputChange}
                                    value={notes}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={onSubmit}
                                className="btn btn-outline-primary mt-3 btn-block"
                            >
                                <i className="far fa-save"></i>
                                <span> Guardar</span>
                            </button>
                        </form>
                    </>
                )}

                {!isAdmin && isLogged && (
                    <>
                        <h1 className="text-center"> Dia de entrevista </h1>
                        <hr />
                        <div className="info-aspirant d-flex align-items-center flex-column justify-content-center">
                            <h2>{title}</h2>
                            <h3 className="ligth">{notes}</h3>
                            <span className="text-date">
                                {moment(start).format("y-MM-DD h:mm a")}
                            </span>
                            <span className="text-date">
                                {moment(end).format("y-MM-DD h:mm a")}
                            </span>

                            {aplication && <span>Link Zoom : {link}</span>}
                            <button
                                type="button"
                                className={`btn btn-outline-success ${
                                    aplication && "disabled"
                                } mt-3 btn-block`}
                                onClick={handleClick}
                            >
                                Aplicar
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};

export default CalendarModal;
