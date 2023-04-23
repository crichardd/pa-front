import { Card } from "react-bootstrap";
import Header from "./header";
import CardFriends from "./componnents/CardFriends";
import './css/card.css';


function Friends() {
  

    return (
        <div className="App">
            <Header connect={true}/>
            <main className="main-friends mt-4">
                <div>
                    <CardFriends/>
                </div>
                
            </main>
        </div>
    );
}

export default Friends;

