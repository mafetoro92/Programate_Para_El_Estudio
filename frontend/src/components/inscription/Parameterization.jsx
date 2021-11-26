// import React, { useContext, useEffect, useState } from "react";
// import { providerContext } from "../../Context/status";
// import "./Parameterization.scss";

// const Parameterization = () => {
//   const { getConvocatorys, convocatorys, convocatory, putParameterization, getConvocatory } = useContext(providerContext);
//   const [datas, setDatas] = useState({
//     parameterization: {
//       personalProfile: 25,
//       sololearn: 25,
//       motivationLetter: 50
//     },
//     residenceCountry: "Colombia",
//     residencyDepartment: "",
//     maxAge: 35,
//     maxSocioeconomicStratus: 3
//   });
//   const handleChangeB = (e) => {
//     setDatas({
//       ...datas,
//       parameterization: {
//         ...datas.parameterization,
//         [e.target.name]: e.target.value
//       }
//     })

//   }
//   const handleChangeC = (e) => {
//     setDatas({ ...datas, [e.target.name]: e.target.value });
//   }
//   useEffect(() => {
//     getConvocatorys()
//     getCountry();
//     getDepartment()
//   }, [])

//   const handleChange = (e) => {
//     const id = e.target.value
//     getConvocatory(id);
//   }

//   const handleOn = (e) => {
//     e.preventDefault();
//     const data = datas
//     const id = convocatory[0]._id
//     const idS = convocatory[0]
//     if (id !== undefined) {
//       putParameterization(id, data);
//     } else {
//       putParameterization(idS, data);
//     }
//   }
//   const handleOn2 = (e) => {
//     e.preventDefault();
//     const data = datas
//     const id = convocatory[0]._id
//     const idS = convocatory[0]
//     if (id !== undefined) {
//       putParameterization(id, data);
//     }
//     if (id === undefined) {
//       putParameterization(idS, data);
//     }
//   }
//   const [countries, setCountries] = useState([]);
//   const getCountry = async () => {
//     const url = "https://restcountries.com/v3.1/all";
//     const request = await fetch(url);
//     const countrie = await request.json();
//     const countries = countrie.map((item) => item.name.common).sort();
//     setCountries(countries);
//   };
//   const [department, setDepartment] = useState([]);
//   const getDepartment = async () => {
//     const url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";
//     const request = await fetch(url);
//     const countrie = await request.json();
//     console.log(countrie)
//     const departments = countrie.map((item) => item.departamento).sort();
//     setDepartment(departments);
//   };

//   return (

//     <>

// <div className="qualify">
//       <div className="qualify__content d-flex justify-content-between">
//         <span className="upperCase bold"> Carta Motvation </span>
//         <div className="box__content">
//           <span className="text-crumbs bold-500"> Programate </span>
//           <i className="fas fa-chevron-right subtitle" />
//           <span className="text-crumbs"> Aspirantes </span>
//         </div>
//       </div>

//       <div className="containerP">
//         <div className="containerFirstSection">
//           <div className="containerTitle">
//             <h2>Parametrización</h2>
//           </div>
//           <div className="containerSelect">
//             <select onChange={(e) => handleChange(e)}>
//               <option>Seleciona una convocatoria</option>
//               {
//                 convocatorys.map(conv => (
//                   <option key={conv._id}
//                     value={conv._id}
//                   >
//                     {conv.name}</option>
//                 ))
//               }
//             </select>
//           </div>
//         </div>
//         <form className="containerSecondSection" onSubmit={handleOn}>
//           <legend>Peso de las categorías</legend>
//           <p>Estos valores son medidos en porcentanjes</p>
//           <div className="containerForm">
//             <div className="containerLabel">
//               <label
//                 for="disabledTextInput"
//                 class="form-label" >
//                 Carta
//               </label>
//               <input type="number"
//                 name="motivationLetter"
//                 class="form-control"
//                 onChange={handleChangeB}
//                 value={datas.parameterization.motivationLetter}
//                 placeholder={convocatory.maxAge} />
//             </div>

//             <div className="containerLabel">
//               <label for="disabledSelect" class="form-label">
//                 Sololearn
//               </label>
//               <input type="number" class="form-control" onChange={handleChangeB} name="sololearn" value={datas.parameterization.sololearn} />
//             </div>

//             <div className="containerLabel">
//               <label for="disabledTextInput" class="form-label">
//                 Perfil personal
//               </label>
//               <input type="number" class="form-control" onChange={handleChangeB} name="personalProfile" value={datas.parameterization.personalProfile} />
//             </div>
//           </div>

//           <button type="submit" class="btn btn-primary" >
//             Guardar cambios
//           </button>
//         </form>

//           <button
//             className="button"
//             type="submit"
//             className="mb-4 btn btn-success"
//           >
//             Guardar cambios
//           </button>

//         <form className="containerThirdSection" onSubmit={handleOn2}>
//           <legend className="containerLegend">
//             Parametrización de la evaluación del perfil
//           </legend>
//           <div className="containerGlobal">
//             <div className="containerLabel">
//               <label for="disabledSelect" class="form-label">
//                 Pais de residencia
//               </label>
//               <select id="disabledSelect" class="form-select" onChange={handleChangeC} name="residenceCountry" value={datas.residenceCountry}>
//                 {countries.map((countrie) => (
//                   <option key={countrie} value={countrie}>
//                     {countrie}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="containerLabel">
//               <label for="disabledSelect" class="form-label">
//                 Departamento de residencia
//               </label>
//               <select id="disabledSelect" class="form-select" onChange={handleChangeC} name="residencyDepartment" value={datas.residencyDepartment}>
//                 <option>Departament</option>
//                 {department.map((departments) => (
//                   <option key={departments} value={departments}>
//                     {departments}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="containerGlobal">
//             <div className="containerLabel">
//               <label for="disabledTextInput" class="form-label" >
//                 Edad
//               </label>
//               <input type="number" class="form-control" onChange={handleChangeC} name="maxAge" value={datas.maxAge} />
//             </div>
//             <div className="containerLabel">
//               <label for="disabledSelect" class="form-label">
//                 Estrato
//               </label>
//               <select id="disabledSelect" class="form-select" onChange={handleChangeC} name="maxSocioeconomicStratus" value={datas.maxSocioeconomicStratus}>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//               </select>
//             </div>
//           </div>
//           <button type="submit" class="btn btn-primary">
//             Guardar cambios
//           </button>
//         </form>

//           <div className="containerGlobal">
//             <div className="containerLabel">
//               <label htmlFor="disabledSelect" className="form-label fs-4">
//                 Población especial
//               </label>
//               <select id="disabledSelect" className="form-select">
//                 <option>Mujeres</option>
//                 <option>Victima de la violencia</option>
//               </select>
//             </div>
//             <div className="containerLabel">
//               <button
//                 className="button"
//                 type="submit"
//                 className="btn btn-success mt-5 fs-5"
//               >
//                 Guardar cambios
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Parameterization;

import React from "react";
import "./Parameterization.scss";

const Parameterization = () => {
  return (
    <>
      <div className="spirants">
        <div className="spirants__content d-flex justify-content-between">
          <span className="upperCase bold"> Aspirantes </span>
          <div className="box__content">
            <span className="text-crumbs bold-500"> Programate </span>
            <i className="fas fa-chevron-right subtitle" />
            <span className="text-crumbs"> Aspirantes </span>
          </div>
        </div>

        <div className="containerP">
          <div className="containerFirstSection">
            <div className="box__title">
              <h2>Parametrización</h2>
            </div>
            <div className="select">
              <select>
                <option>Regional</option>
                <option>Goyn</option>
                <option>Cohorte I</option>
                <option>Cohorte II</option>
              </select>
            </div>
          </div>
          <div className="second__section">
            <div className="text__content">
              <h4 className="text__content-subtitle">Peso de las categorías</h4>
              <p className="text__content-text">
                Estos valores son medidos en porcentanjes
              </p>
            </div>
            <div className="box__inputs">
              <div className="inputs">
                <div class="mb-4">
                  <label class="form-label">Perfil personal</label>
                  <input type="number" class="form-control" />
                </div>
              </div>
              <div className="inputs">
                <div class="mb-4">
                  <label class="form-label">SoloLearn</label>
                  <input type="number" class="form-control" />
                </div>
              </div>
              <div className="inputs">
                <div class="mb-4">
                  <label class="form-label">Carta de motivación</label>
                  <input type="number" class="form-control" />
                </div>
              </div>
            </div>

            <button
              className="button"
              type="submit"
              class="mb-4 btn btn-success"
            >
              Guardar cambios
            </button>
          </div>

          <div className="containerThirdSection">
            <legend className="containerLegend">
              <h4>Parametrización de la evaluación del perfil</h4>
            </legend>
            <div className="containerGlobal">
              <div className="containerLabel">
                <label for="disabledSelect" class="form-label fs-4">
                  Pais de residencia
                </label>
                <select id="disabledSelect" class="form-select">
                  <option className="pickCountry">Colombia</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="containerLabel">
                <label for="disabledSelect" class="form-label fs-4">
                  Dto. residencia
                </label>
                <select id="disabledSelect" class="form-select">
                  <option>Santander</option>
                  <option>Valle</option>
                </select>
              </div>
            </div>

            <div className="containerGlobal">
              <div className="containerLabel">
                <label for="disabledTextInput" class="form-label fs-4">
                  Edad
                </label>
                <input type="number" class="form-control" />
              </div>
              <div className="containerLabel">
                <label for="disabledSelect" class="form-label fs-4">
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
                <label for="disabledSelect" class="form-label fs-4">
                  Población especial
                </label>
                <select id="disabledSelect" class="form-select">
                  <option>Mujeres</option>
                  <option>Victima de la violencia</option>
                </select>
              </div>
              <div className="containerLabel">
                <button
                  className="button"
                  type="submit"
                  class="btn btn-success mt-5 fs-5"
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parameterization;
