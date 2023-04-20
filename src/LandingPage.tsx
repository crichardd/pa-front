import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';


function LandingPage() {

  return (
    <div className="App">
      <header className="App-header bg-light">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark w-100" style={{ height: "50px", minHeight: "50px", position: "fixed", top: 0 }}>
          <a className="navbar-brand" href="#">
            <img src={require("./img/img.png")} style={{width: '50px', height: '50px'}} className="rounded-pill"/>               
          </a>
        </nav>
        <div className='mint titleMain'><h1>Stime</h1> </div>
      </header>
      <main className='LandingPage-main'>
     
      </main>
    </div>
  );
}

export default LandingPage;
