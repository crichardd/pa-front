import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect} from 'react';


function Login(){
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //animation signIn signUp
  const switchersRef = useRef<NodeListOf<Element>>(null);

  useEffect(() => {
    const switchers = switchersRef.current;

    if (switchers) {
      const handleClick = function(this: HTMLElement) {
        switchers.forEach((item) =>
          item.parentElement?.classList.remove('is-active')
        );
        this.parentElement?.classList.add('is-active');
      };

      switchers.forEach((item) => {
        item.addEventListener('click', handleClick);
      });

      return () => {
        switchers.forEach((item) => {
          item.removeEventListener('click', handleClick);
        });
      };
    }

  }, []);

  return (
    <div className="App">
      <header className="App-header bg-light">
        <div className='mint titleMain'><h1>TurnMaster</h1> </div>
      </header>
      <main className='LandingPage-main'>
        <section className="forms-section">
          
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

export default Login;
