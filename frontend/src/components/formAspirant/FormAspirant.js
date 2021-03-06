import React, { useState } from "react";
import Step1 from "../stepForm/Step1";
import "./FormAspirant.scss";

const FormAspirant = () => {
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    firstSurname: "",
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
  });

  const {firstName, secondName, firstSurname, secondSurname, document, numberDocument, pdf, email, phone, 
         nationality, migrant, liveColombia, department , municipality, locality, addres, stratum, birth, age, birthTwo,
         sex, status,academicLevel,title,occupation, unemployed, employment, armedConflict, computer, logProgramate, 
         accesComputer, profileSololearn, dreams, motivation} = data


  const handeleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log(data)

    setData({
      firstName: "",
      secondName: "",
      firstSurname: "",
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
    })

  }
  const  getCountrie = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const request = await fetch(url);
    const countrie = await request.json();
    const countries = countrie.map(item => item.name.common).sort()
    setCountries(countries)
  }
  
  getCountrie()



  return (

    <div className="form mt-4">
      <h3 className="mb-4">Formulario De Inscripci??n</h3>

      <form onSubmit={sendData}>
          <Step1 data={data} handeleChange={handeleChange}/>
        
          

        

        {/* {error ? (
          <p className="error-mesage mt-4">Todos los campos son obligatorios</p>
        ) : null} */}


        <button
          className="btn btn-success prueba mt-4"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>

  );
};

export default FormAspirant;







// import React, { useState } from "react";
// import "./FormAspirant.scss";

// const FormAspirant = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     secondName: "",
//     firstSurname: "",
//     secondSurname: "",
//     document: "",
//     numberDocument: "",
//     pdf: "",
//     email: "",
//     phone: "",
//     nationality: "",
//     migrant: "",
//     liveColombia: "",
//     department: "",
//     municipality: "",
//     locality: "",
//     addres: "",
//     stratum: "",
//     birth: "",
//     age: "",
//     birthTwo: "",
//     sex: "",
//     status: "",
//     academicLevel: "",
//     title: "",
//     occupation: "",
//     unemployed: "",
//     employment: "",
//     armedConflict: "",
//     computer: "",
//     logProgramate: "",
//     accesComputer: "",
//     profileSololearn: "",
//     dreams: "",
//     motivation: "",
//   });

//   const {firstName, secondName, firstSurname, secondSurname, document, numberDocument, pdf, email, phone, 
//          nationality, migrant, liveColombia, department , municipality, locality, addres, stratum, birth, age, birthTwo,
//          sex, status,academicLevel,title,occupation, unemployed, employment, armedConflict, computer, logProgramate, 
//          accesComputer, profileSololearn, dreams, motivation} = data

//   const [countries, setCountries] = useState([])

//   const handeleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const sendData = (e) => {
//     e.preventDefault();
//     console.log(data)

//     setData({
//       firstName: "",
//       secondName: "",
//       firstSurname: "",
//       secondSurname: "",
//       document: "",
//       numberDocument: "",
//       pdf: "",
//       email: "",
//       phone: "",
//       nationality: "",
//       migrant: "",
//       liveColombia: "",
//       department: "",
//       municipality: "",
//       locality: "",
//       addres: "",
//       stratum: "",
//       birth: "",
//       age: "",
//       birthTwo: "",
//       sex: "",
//       status: "",
//       academicLevel: "",
//       title: "",
//       occupation: "",
//       unemployed: "",
//       employment: "",
//       armedConflict: "",
//       computer: "",
//       logProgramate: "",
//       accesComputer: "",
//       profileSololearn: "",
//       dreams: "",
//       motivation: "",
//     })

//   }
//   const  getCountrie = async () => {
//     const url = 'https://restcountries.com/v3.1/all';
//     const request = await fetch(url);
//     const countrie = await request.json();
//     const countries = countrie.map(item => item.name.common).sort()
//     setCountries(countries)
//   }
  
//   getCountrie()



//   return (

//     <div className="form mt-4">
//       <h3 className="mb-4">Formulario De Inscripci??n</h3>

//       <form onSubmit={sendData}>
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Primer Nombre
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               className="form-control"
//               placeholder=""
//               onChange={handeleChange}
//               value={firstName}
//             />
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Segundo Nombre
//             </label>
//             <input
//               type="text"
//               name="secondName"
//               className="form-control"
//               placeholder=""
//               onChange={handeleChange}
//               value={secondName}
//             />
//           </div>
//         </div>
//         <div className="row mt-4">
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Primer Apellido
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="firstSurname"
//               placeholder=""
//               onChange={handeleChange}
//               value={firstSurname}
//             />
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Segundo Apellido
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="secondSurname"
//               placeholder=""
//               onChange={handeleChange}
//               value={secondSurname}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">Tipo de documento</label>
//             <select
//               name="document"
//               onChange={handeleChange}
//               value={document}
//               className="form-select"
//             >
//               <option value="cc">Selecciona el tipo de documento</option>
//               <option value="CC">CC</option>
//               <option value="TI">TI</option>
//             </select>
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               N??mero de documento
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               name="numberDocument"
//               onChange={handeleChange}
//               value={numberDocument}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-12 col-md-6">
//             <label htmlFor="formFile" className="form-label">
//               Fotocopia de documento de identidad
//             </label>
//             <input
//               className="form-control"
//               type="file"
//               id="formFile"
//               name="pdf"
//               onChange={handeleChange}
//               value={pdf}
//             />
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Correo electr??nico
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               onChange={handeleChange}
//               value={email}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Tel??fono de contacto secundario
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               name="phone"
//               onChange={handeleChange}
//               value={phone}
//             />
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">Nacionalidad</label>
//             <select
//               name="nationality"
//               onChange={handeleChange}
//               value={nationality}
//               className="form-select"
//             >
//               <option value="select">Selecciona un pais</option>
//               {
//                   countries.map(countrie => (
//                     <option 
//                     key={countrie} 
//                     value={countrie}>
//                     {countrie}
//                     </option>
//                  ))
//               }
//             </select>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">??Eres Migrante?</label>
//             <select
//               name="migrant"
//               onChange={handeleChange}
//               value={migrant}
//               className="form-select"
//             >
//               <option value="select">Selecciona si o no</option>
//               <option value="si">Si</option>
//               <option value="no">No</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">??Vives en Colombia?</label>
//             <select
//               name="liveColombia"
//               onChange={handeleChange}
//               value={liveColombia}
//               className="form-select"
//             >
//               <option value="select">Selecciona si o no</option>
//               <option value="si">Si</option>
//               <option value="no">No</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">Departamento de residencia</label>
//             <select
//               name="department"
//               onChange={handeleChange}
//               value={department}
//               className="form-select"
//             >
//               <option value="select">Selecciona tu Departamento</option>
//               <option value="Cundinamarca">Cundinamarca</option>
//               <option value="Guain??a">Guain??a</option>
//               <option value="Guaviare">Guaviare</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">Municipio de Residencia</label>
//             <select
//               name="municipality"
//               onChange={handeleChange}
//               value={municipality}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu Municipio</option>
//               <option value="Bogota">Bogota</option>
//               <option value="Barranquilla">Barranquilla</option>
//               <option value="Medellin">Medellin</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               Si resides en Bogot??, cual es tu localidad de residencia
//             </label>
//             <select
//               name="locality"
//               onChange={handeleChange}
//               value={locality}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu localidad</option>
//               <option value="La Candelaria">La Candelaria</option>
//               <option value="Ciudad Bol??var">Ciudad Bol??var</option>
//               <option value="Sumapaz">Sumapaz</option>
//             </select>
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Direcci??n permanente/recurrent e de residencia
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="addres"
//               onChange={handeleChange}
//               value={addres}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">Estrato socioecon??mico</label>
//             <select
//               name="stratum"
//               onChange={handeleChange}
//               value={stratum}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu Estrato</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               <option value="6">6</option>
//             </select>
//           </div>
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Fecha de nacimiento
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               name="birth"
//               onChange={handeleChange}
//               value={birth}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Edad actual
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               name="age"
//               onChange={handeleChange}
//               value={age}
//             />
//           </div>

//           <div className="col-12 col-md-6">
//             <label htmlFor="" className="form-label">
//               Si cumple 18 a??os durante la formaci??n, ingrese la fecha de
//               cumplea??os
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               name="birthTwo"
//               onChange={handeleChange}
//               value={birthTwo}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">sexo</label>
//             <select
//               name="sex"
//               onChange={handeleChange}
//               value={sex}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu Sexo</option>
//               <option value="Masculino">Masculino</option>
//               <option value="Femenino">Femenino</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">Estado Civil</label>
//             <select
//               name="status"
//               onChange={handeleChange}
//               value={status}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu Estado Civil</option>
//               <option value="Soltero">Soltero</option>
//               <option value="Divorciado">Divorciado</option>
//               <option value="Union libre">Union libre</option>
//               <option value="Casado">Casado</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               M??ximo Nivel Acad??mico Alcanzado
//             </label>
//             <select
//               name="academicLevel"
//               onChange={handeleChange}
//               value={academicLevel}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu Nivel Acad??mico</option>
//               <option value="Bachiller">Bachiller</option>
//               <option value="T??cnico">T??cnico</option>
//               <option value="Tecn??logo">Tecn??logo</option>
//               <option value="Grado">Grado</option>
//               <option value="Universitario">Universitario</option>
//               <option value="Profesional">Profesional</option>
//               <option value="Especialista">Especialista</option>
//               <option value="Maestr??a">Maestr??a</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               Si tu respuesta anterior fue t??cnico, tecn??logo o grado
//               universitario profesional cu??ntanos ??Qu?? t??tulo obtuviste?
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="title"
//               onChange={handeleChange}
//               value={title}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               Actividad econ??mica /ocupaci??n actual
//             </label>
//             <select
//               name="occupation"
//               onChange={handeleChange}
//               value={occupation}
//               className="form-select"
//             >
//               <option value="cc">Selecciona tu Ocupaci??n</option>
//               <option value="Desempleado">Desempleado</option>
//               <option value="Empleado">Empleado</option>
//               <option value="Independiente">Independiente</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               Si la respuesta anterior es "desempleado", ??hace cu??nto tiempo te
//               encuentras en dicha situaci??n?
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="unemployed"
//               onChange={handeleChange}
//               value={unemployed}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               ??Has tenido antes un empleo formal (con contrato)?
//             </label>
//             <select
//               name="employment"
//               onChange={handeleChange}
//               value={employment}
//               className="form-select"
//             >
//               <option value="cc">Selecciona Si o No</option>
//               <option value="Si">Si</option>
//               <option value="No">No</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               ??Eres v??ctima del conflicto armado?
//             </label>
//             <select
//               name="armedConflict"
//               onChange={handeleChange}
//               value={armedConflict}
//               className="form-select"
//             >
//               <option value="cc">Selecciona Si o No</option>
//               <option value="Si">Si</option>
//               <option value="No">No</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               ??Tienes acceso a un computador?
//             </label>
//             <select
//               name="computer"
//               onChange={handeleChange}
//               value={computer}
//               className="form-select"
//             >
//               <option value="cc">Selecciona Si o No</option>
//               <option value="Si">Si</option>
//               <option value="No">No</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               ??Cu??ntas veces has intentado ingresar a "Progr??mate"?
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               name="logProgramate"
//               onChange={handeleChange}
//               value={logProgramate}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               ??Tienes acceso a un computador?
//             </label>
//             <select
//               name="accesComputer"
//               onChange={handeleChange}
//               value={accesComputer}
//               className="form-select"
//             >
//               <option value="cc">Selecciona Si o No</option>
//               <option value="Si">Si</option>
//               <option value="No">No</option>
//             </select>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">N??mero del perfil de Sololearn</label>
//             <input
//               type="number"
//               className="form-control"
//               name="profileSololearn"
//               onChange={handeleChange}
//               value={profileSololearn}
//             />
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               ??Cu??les son tus principales sue??os en la vida y c??mo la formaci??n
//               te aportar?? a cumplirlos?
//             </label>
//             <textarea
//               type="text"
//               className="form-control"
//               name="dreams"
//               onChange={handeleChange}
//               value={dreams}
//             ></textarea>
//           </div>
//           <div htmlFor="" className="col-12 col-md-6">
//             <label className="form-label">
//               Cu??ntanos en el siguiente espacio en un p??rrafo de motivaci??n ??qu??
//               es progr??mate para ti? ??Qu?? es lo que m??s te interesa de la
//               metodolog??a? ??Por qu?? quieres ser parte de Progr??mate?
//             </label>
//             <textarea
//               type="text"
//               className="form-control"
//               name="motivation"
//               onChange={handeleChange}
//               value={motivation}
//             ></textarea>
//           </div>
//         </div>

//         {/* {error ? (
//           <p className="error-mesage mt-4">Todos los campos son obligatorios</p>
//         ) : null} */}


//         <button
//           className="btn btn-success prueba mt-4"
//           type="submit"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>

//   );
// };

// export default FormAspirant;
