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

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark w-100" style={{ height: "50px", minHeight: "50px", position: "fixed", top: 0 }}>
          <a className="navbar-brand" href="#">
            <img src={require("./img/img.png")} style={{width: '50px', height: '50px'}} className="rounded-pill"/>               
          </a>
        </nav>
      </header>
      <main className='bg-dark LandingPage-main'>
      <section class="forms-section">
          <h1 class="section-title">Animated Forms</h1>
          <div class="forms">
            <div class="form-wrapper is-active">
              <button type="button" class="switcher switcher-login">
                Login
                <span class="underline"></span>
              </button>
              <form class="form form-login">
                <fieldset>
                  <legend>Please, enter your email and password for login.</legend>
                  <div class="input-block">
                    <label for="login-email">E-mail</label>
                    <input id="login-email" type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="login-password">Password</label>
                    <input id="login-password" type="password" required/>
                  </div>
                </fieldset>
                <button type="submit" class="btn-login">Login</button>
              </form>
            </div>
            <div class="form-wrapper">
              <button type="button" class="switcher switcher-signup">
                Sign Up
                <span class="underline"></span>
              </button>
              <form class="form form-signup">
                <fieldset>
                  <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                  <div class="input-block">
                    <label for="signup-email">E-mail</label>
                    <input id="signup-email" type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password">Password</label>
                    <input id="signup-password" type="password" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password-confirm">Confirm password</label>
                    <input id="signup-password-confirm" type="password" required/>
                  </div>
                </fieldset>
                <button type="submit" class="btn-signup">Continue</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
