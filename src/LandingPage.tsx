import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';
import Header from './header';
import './css/burgerMenu.css';


function LandingPage() {

  return (
    <div className="App">
      <Header connect={true}/>
      
      <main className='LandingPage-main bg-dark'>
     
      </main>
    </div>
  );
}

export default LandingPage;
