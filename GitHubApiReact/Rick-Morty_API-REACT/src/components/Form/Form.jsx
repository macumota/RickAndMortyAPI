import React, { useState } from "react";

const Form = (props) => {
  
  const INITIAL_STATE = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  };

  const [state, setState] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
    setState(INITIAL_STATE);
  };

  const handleInput = (ev, name) => {
    setState({ ...state, [name]: ev.target.value});
  };

  const formFields = [
    { type: "text", name: "nombre", label: "Nombre" },
    { type: "text", name: "apellido", label: "Apellido" },
    { type: "email", name: "email", label: "Email" },
    { type: "tel", name: "telefono", label: "Teléfono" },
  ];

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        {formFields.map((field, index) => (
          <label key={index}>
            <p>{field.label}</p>
            <input
              type={field.type}
              value={state[field.name]}
              onChange={(ev) => handleInput(ev, [field.name])}
            />
          </label>
        ))}

        <div>
          <button type="submit">Guardar Perfil</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;