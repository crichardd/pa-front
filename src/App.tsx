import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect} from 'react';
import Login from './Login';


function App(){
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
/*
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Pseudo: ${pseudo}, Email: ${email}, Mot de passe: ${password}`);
  }*/

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
    <div>
      <Login/>
    </div>
  );
}

export default App;
