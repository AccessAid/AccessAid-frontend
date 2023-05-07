import React from 'react';
import { connect } from 'react-redux';
import './Login.css';

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
      // eslint-disable-next-line no-restricted-globals

      alert('Acceso correcto, puede continuar ' + userData.email);
    } else {
      alert('It went wrong');
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
          errorMessage='You must provide a valid email'
          name='email'
          value={userData.username}
          onChange={handleOnChange}
        />

        <Input
          className='login-form'
          type='password'
          placeholder='Password'
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
          errorMessage='Your password must contain 8 characters and at least one letter and one number'
          name='password'
          value={userData.password}
          onChange={handleOnChange}
        />

        <a href='/'>Forgot your password</a>
        <button className='login-button'>
          <img src={LoginImage} alt='lock-logo' />
          <span>Sign In</span>
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
