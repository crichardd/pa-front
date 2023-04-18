import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ height: "50", minHeight: "50"}}>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark w-100" style={{ height: "50px", minHeight: "50px", position: "fixed", top: 0 }}>
          <a className="navbar-brand" href="#">
            <img src={require("./img/img.png")} style={{width: '50px', height: '50px'}} className="rounded-pill"/>               
          </a>
        </nav>
      </header>
      <main>
 
      </main>
    </div>
  );
}

export default App;
