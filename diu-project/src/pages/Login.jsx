import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logoUSM from '../assets/logoUSM.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@usm\.cl$/; // Validación para correos que terminen en @usm.cl
    return emailRegex.test(email);
  };

  const onButtonClick = () => {
    let isValid = true;

    if (!email) {
      setEmailError('El correo es obligatorio');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Ingrese un correo válido nombre@usm.cl');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      navigate('/options');
    }
  };

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <img src={logoUSM} alt="Logo USM" className="logoUSM" />
        <h2 className="welcomeText">Bienvenido al DEFIDER</h2>
      </div>
      <div className="titleContainer">
        Iniciar Sesión
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="email"
          value={email}
          placeholder="Correo Institucional"
          onChange={(ev) => {
            setEmail(ev.target.value);
            setEmailError('');
          }}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(ev) => {
            setPassword(ev.target.value);
            setPasswordError('');
          }}
          className="inputBox"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onButtonClick}
          value="Acceder"
        />
      </div>
    </div>
  );
};

export default Login;
