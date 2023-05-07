import React, { useState } from 'react';
import { connect } from 'react-redux';
import LogoImage from '../../assets/man.png';
import LoginImage from '../../assets/man.png';
import './Login.css';
import Input from '../../components/Input/Input';

export const LoginForm = (props) => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleOnChange = ({ target }) => {
    setUserData((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (
      userData.email === 'admin@admin.com' &&
      userData.password === 'admin1234'
    ) {
      // eslint-disable-next-line no-restricted-globals

      alert('Acceso correcto, puede continuar ' + userData.email);
    } else {
      alert('Ups hubo algun problema');
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className='login-card'>
        <img src={LogoImage} alt='logo' />
        <span>Inicia sesión en tu cuenta</span>

        <Input
          className='login-form'
          type='email'
          placeholder='Correo Electonico'
          errorMessage='Introduce correo electronico valido'
          name='email'
          value={userData.username}
          onChange={handleOnChange}
        />

        <Input
          className='login-form'
          type='password'
          placeholder='Palabra clave'
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
          errorMessage='Su contraseña debe contener 8 caracteres y al menos una letra y un número'
          name='password'
          value={userData.password}
          onChange={handleOnChange}
        />

        <a href='/'>Olvidaste tu contraseña</a>
        <button className='login-button'>
          <img src={LoginImage} alt='lock-logo' />
          <span>Iniciar Sesion</span>
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
