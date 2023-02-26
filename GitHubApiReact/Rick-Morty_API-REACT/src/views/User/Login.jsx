import { useState } from 'react';
import './User.scss';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader.jsx';

const Login = () => {

  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  });

  // variable de estado para mandar el msj que queramos

  const [msj, setMsj] = useState('');

  // variable de estado para mandar el msj de register cuando queremos

  const [msjReg, setMsjReg] = useState(false);

  // variable de estado para poner y quitar el spinner del Loader

  const [loading, setLoading] = useState(false);

  // funcion para recojer datos de nuestros usuarios

  const handleUser = (ev) => {
    setuserLogin({ ...userLogin, [ev.target.id]: ev.target.value });
  };

  // funcion para hacer el registro en nuestra api, con axios

  const handleLogin = (ev) => {
    ev.preventDefault();

    // carga el Loader y te pone el msj de registro visible

    setLoading(true);
    setMsjReg(true);
    axios.post('https://nodejs-proyectodb-mpl0haqpi-numby86.vercel.app/user/login', userLogin)
    .then((res) => {
      if(res.data._id){

        // manda msj y desaparece loader

        setMsj('Login correcto.');
        setLoading(false);
      }
    })
    .catch((error) => {

      // manda msj y desaparece loader

      setMsj('Error de usuario. Intentelo de nuevo.');
      setLoading(false);
    });
  }
  return (
    <>
      <form className={msj === 'Login correcto.' ? 'none' : 'user'}>
        <label htmlFor="user">Usuario</label>
        <input className='input' type="text" id="email" onChange={handleUser} />
        <label htmlFor="password">Contraseña</label>
        <input className='input' type="password" id="password" onChange={handleUser} />
        <button className='butSubmit' onClick={handleLogin}>Login</button>
      </form>
      {loading === true ? <Loader></Loader> : null}
      {msjReg === false ? <p className='user'>Aun no eres usuario?  <Link to={'/register'} className='link'>REGISTRATE</Link></p> : null}

      {/* mensaje de login correcto y un link para ver Posts de nuestros user */}
      
      {msj === 'Login correcto.' ? <Link className='git' to={'/posts'}>Ver posts</Link> : null}
      <p className='link'>{msj}</p>
    </>
  );
};
export default Login;

