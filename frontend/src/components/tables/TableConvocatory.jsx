import React, { useCallback, useState } from "react";
import "./TableConvocatory.css";

const TableConvocatory = () => {

    const useToggle = (initialToggleValue = true) => {
        const [value, setToggleValue] = useState(initialToggleValue)

        const toggle = useCallback(() => {
            setToggleValue(value => !value)
        }, [])
        return [value, toggle]
    }

    const [isSwichOn, toggleSwich] = useToggle();
    const text = isSwichOn ? 'Activada' : 'Desactivada'


  return (
    <>
      <div className="table__convocatory">
        <table class="table table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">N° Aspirantes</th>
              <th scope="col">Editar</th>
              <th scope="col">Estado</th>
              <th scope="col">Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cohorte I</td>
              <td>35</td>
              <td>
                <i className="far fa-edit"></i>
              </td>
              <td><button className="state" onClick={toggleSwich} >
                    {text}
                  </button></td>
              <td><button className="prueba"><i className="fas fa-eye"></i></button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cohorte II</td>
              <td>45</td>
              <td>
                <i class="far fa-edit"></i>
              </td>
              <td><button className="state" onClick={toggleSwich} >
                    {text}
                  </button></td>
              <td>
                <i className="fas fa-eye"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cohorte III</td>
              <td>75</td>
              <td>
                <i class="far fa-edit"></i>
              </td>
              <td><button className="state" onClick={toggleSwich} >
                    {text}
                  </button></td>
              <td>
                <i className="fas fa-eye"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableConvocatory;
