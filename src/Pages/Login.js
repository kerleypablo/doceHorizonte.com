/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import * as EmailValidator from 'email-validator';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import { login, verifyLogin } from '../services/loginServices';
import './styles/Login.css';
import { verifyLastUser } from '../services/userServices';

const minpass = 6;
const errovalidation = 404;

function Login() {
  const [erroMessage, setErrorMessage] = useState('');
  const [btnIsdisable, setBttnIsDisabled] = useState(true);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const { email, password } = formState;

  const handleInput = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  useEffect(() => {
    const verifyButton = () => {
      const validateEmail = EmailValidator.validate(email);
      const validatePassword = password.length >= minpass;
      if (validateEmail && validatePassword) {
        setBttnIsDisabled(false);
        setErrorMessage('');
      } else if (email.length === 0) {
        setErrorMessage('');
        setBttnIsDisabled(true);
      } else if (!validateEmail) {
        setErrorMessage('digite um email valido');
        setBttnIsDisabled(true);
      }
    };
    verifyButton();
  }, [email, password]);

  const verifyUserLogged = async (user) => {
    const statusLogged = 200;
    const status = await verifyLogin(user);
    if (status === statusLogged) {
      if (user.role === 'customer') {
        console.log('customer');
        navigate('/customer/products');
      } else {
        console.log('seller');
        navigate('/seller/orders');
      }
    } else {
      localStorage.clear();
    }
  };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user')) || null;
    if (user) verifyUserLogged(user);
  }, []);

  const handleButtonLogin = async () => {
    const result = await login({ email, password });
    if (!result) {
      setErrorMessage('falha na comunicacao');
      return null;
    }
    if (result.status === errovalidation) {
      setErrorMessage('usuario Invalido');
      return null;
    }
    // clear checkoutProducts in case of new user
    verifyLastUser(result);
    localStorage.setItem('user', JSON.stringify(result));

    if (result.role === 'customer') navigate('/customer/products');
    if (result.role === 'administrator') navigate('/admin/manage');
    if (result.role === 'seller') navigate('/seller/orders');
  };

  return (
    <section className="box_principal">
      <div className="box_logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className="forms_login">
        <label htmlFor="email-input" className="label_login">
          Login
          <input
            id="email-input"
            type="text"
            name="email"
            data-testid="common_login__input-email"
            value={email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="password-input" className="label_login">
          Senha
          <input
            id="password-input"
            type="password"
            name="password"
            data-testid="common_login__input-password"
            value={password}
            onChange={handleInput}
          />
        </label>
        <button
          className="button_login"
          type="button"
          data-testid="common_login__button-login"
          disabled={btnIsdisable}
          onClick={handleButtonLogin}
        >
          LOGIN
        </button>
        <button
          className="button_Register"
          type="button"
          data-testid="common_login__button-register"
          onClick={() => navigate('/register')}
        >
          Ainda nao tenho Conta
        </button>
      </form>
      <p data-testid="common_login__element-invalid-email">
        { erroMessage }
      </p>
    </section>
  );
}

export default Login;
