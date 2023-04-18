import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';


function App() {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Pseudo: ${pseudo}, Email: ${email}, Mot de passe: ${password}`);
  }

  const switchers = [...document.querySelectorAll('.switcher')]

  switchers.forEach(item => {
    item.addEventListener('click', function() {
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active')
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark w-100" style={{ height: "50px", minHeight: "50px", position: "fixed", top: 0 }}>
          <a className="navbar-brand" href="#">
            <img src={require("./img/img.png")} style={{width: '50px', height: '50px'}} className="rounded-pill"/>               
          </a>
        </nav>
      </header>
      <main className='LandingPage-main'>
      <section className="forms-section">
        <h1 className="section-title">Stime</h1>
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Login
              <span className="underline"></span>
            </button>
            <form className="form form-login">
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input id="login-email" type="email" required/>
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input id="login-password" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Login</button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span> 
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required/>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" required/>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">Confirm password</label>
                  <input id="signup-password-confirm" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">Continue</button>
            </form>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;
