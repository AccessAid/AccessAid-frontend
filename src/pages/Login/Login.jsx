import React from 'react';
import { connect } from 'react-redux';

export const Login = (props) => {
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
      alert('Acceso correcto, puede continuar ' + userData.email);
    } else {
      alert('Algo salio mal!');
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className='login-card'>
        <img src={LogoImage} alt='logo' />
        <span>Sign In your account</span>

        <Input
          className='login-form'
          type='email'
          placeholder='Email address'
          errorMessage='Introduzca correo valido'
          name='email'
          value={userData.username}
          onChange={handleOnChange}
        />

        <Input
          className='login-form'
          type='password'
          placeholder='Password'
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
          errorMessage='Su contraseña debe contener 8 caracteres y al menos una letra y un número'
          name='password'
          value={userData.password}
          onChange={handleOnChange}
        />

        <a href='/'>Olvidaste tu contraseña</a>
        <button className='login-button'>
          <img src={LoginImage} alt='lock-logo' />
          <span>Iniciar sesión</span>
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
