import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav class="navbar navbar-expand-sm bg-light navbar-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="logo.png" alt="Avatar Logo" style={{width: '40px'}} className="rounded-pill"/>               
              </a>
            </div>
          </nav>
      </header>
    </div>
  );
}

export default App;
