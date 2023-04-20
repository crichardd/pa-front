import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';


function Profil() {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Pseudo: ${pseudo}, Email: ${email}, Mot de passe: ${password}`);
  }

  //animation signIn signUp
  const switchers = [...document.querySelectorAll('.switcher')]

  switchers.forEach(item => {
    item.addEventListener('click', function() {
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active')
    })
  })

  return (
    <div className="App">
      <header className="App-header bg-light">
        <div className='mint titleMain'><h1>Stime</h1> </div>
      </header>
      <main className='LandingPage-main'></main>
    </div>
  );
}

export default Profil;
