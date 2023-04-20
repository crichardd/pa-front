function Header(){

    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-sm navbar-dark w-100" style={{ height: "80px", minHeight: "80px", position: "fixed", top: 0 }}>
            <a className="navbar-brand" href="#">
                <img src={require("./img/img.png")} style={{width: '70px', height: '70px'}} className="rounded-pill"/>               
            </a>
            <div className='mint titleMain'><h1>Stime</h1> </div>
            </nav>
        
        </header>
    );

}

export default Header;