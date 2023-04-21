

function Header(){

    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-sm navbar-dark w-100" style={{ height: "80px", minHeight: "80px", position: "fixed", top: 0 }}>
            <div className='mint titleMain'><h1>Stime</h1> </div>
            
            <div className="menu ml-auto">
                <ul>
                    
                    <li><a href="#">Amis</a></li>
                    <li><a href="#">Conversation</a></li>
                    <li><a href="#">Mon profil</a></li>
                </ul>
            </div>
            
            </nav>
        </header>
    );

}

export default Header;