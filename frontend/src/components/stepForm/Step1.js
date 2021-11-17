import React, { useState, useEffect } from "react";

const Step1 = ({ data, handeleChange }) => {
  const {
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    document,
    numberDocument,
    pdf,
    email,
    phone,
    nationality,
  } = data;

  const [countries, setCountries] = useState([]);
  const [reload,setReload]=useState(false);

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

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label" >
            Primer Nombre
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder=""
            onChange={handeleChange}
            value={firstName}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Segundo Nombre
          </label>
          <input
            type="text"
            name="secondName"
            className="form-control"
            placeholder=""
            onChange={handeleChange}
            value={secondName}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Primer Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="firstSurname"
            placeholder=""
            onChange={handeleChange}
            value={firstSurname}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Segundo Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="secondSurname"
            placeholder=""
            onChange={handeleChange}
            value={secondSurname}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Tipo de documento</label>
          <select
            name="document"
            onChange={handeleChange}
            value={document}
            className="form-select"
          >
            <option value="cc">Selecciona el tipo de documento</option>
            <option value="CC">CC</option>
            <option value="TI">TI</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Número de documento
          </label>
          <input
            type="number"
            className="form-control"
            name="numberDocument"
            onChange={handeleChange}
            value={numberDocument}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="formFile" className="form-label">
            Fotocopia de documento de identidad
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="pdf"
            onChange={handeleChange}
            value={pdf}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handeleChange}
            value={email}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Teléfono de contacto secundario
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            onChange={handeleChange}
            value={phone}
          />
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Nacionalidad</label>
          <select
            name="nationality"
            onChange={handeleChange}
            value={nationality}
            className="form-select"
          >
            <option value="select">Selecciona un pais</option>
            {countries.map((countrie) => (
              <option key={countrie} value={countrie}>
                {countrie}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Step1;
