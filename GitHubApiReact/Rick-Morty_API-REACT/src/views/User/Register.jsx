import { useState } from "react";
import "./User.scss";
import axios from "axios";
import Loader from '../../components/Loader/Loader.jsx';
import Button from '../../components/Button/Button.jsx';
import { Link } from "react-router-dom";

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    telefono: ""
  });

  // variable de estado para mandar el msj que queramos

  const [msj, setMsj] = useState("");

  // variable de estado para poner y quitar el spinner del Loader

  const [loading, setLoading] = useState(false);

  // funcion para recojer datos de nuestros usuarios

  const handleChangeUser = (ev) => {
    setNewUser({ ...newUser, [ev.target.id]: ev.target.value });
  };

  // button actualizar pagina

  const refreshPage = ()=>{
    window.location.reload();
 }

 // funcion para hacer el registro en nuestra api, con axios

  const handleCreate = (ev) => {
    ev.preventDefault();

    // carga el Loader

    setLoading(true);
    axios
      .post(
        "https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/register",
        newUser
      )
      .then((res) => {
        console.log(res.data);
        if (res.data._id) {

          // manda msj y desaparece loader

          setMsj("Te registraste correctamente.");
          setLoading(false);
        }
      })
      .catch(() => {

        // manda msj y desaparece loader

        setMsj("Se ha producido un error al registrarte. ");
        setLoading(false);
      });
  };

  return (
    <>

      {/* condicion para que aparezca o no el formulario */}

      <form className={msj === "Te registraste correctamente." ? 'none' : 'user'}>
        <label htmlFor="name">Nombre</label>
        <input
          className="input"
          type="text"
          id="name"
          onChange={handleChangeUser}
        />
        <label htmlFor="surname">Apellidos</label>
        <input
          className="input"
          type="text"
          id="surname"
          onChange={handleChangeUser}
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          className="input"
          type="tel"
          id="telefono"
          onChange={handleChangeUser}
        />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="text"
          id="email"
          onChange={handleChangeUser}
        />
        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          id="password"
          onChange={handleChangeUser}
        />
        <button className="butSubmit" onClick={handleCreate}>
          Registrarse
        </button>
      </form>

      {/* ponemos condiciones para que aparezca los msj y el loader */}

      {loading === true ? <Loader></Loader> : null}
      <p className="user">{msj}</p>
      <button onClick={refreshPage} className={msj === "Se ha producido un error al registrarte. " ? 'refresh' : 'none'} to={'/register'}>Intentalo de nuevo</button>
      {msj === "Te registraste correctamente." ? <Link to={'/'}><Button texto={'GO HOME'} /></Link> : null}
    </>
  );
};
export default Register;
