import { Card } from "react-bootstrap";
import Header from "./header";
import CardFriends from "./componnents/CardFriends";


function Friends() {
  

    return (
        <div className="App">
            <Header connect={true}/>
            <main>
                <CardFriends/>
            </main>
        </div>
    );
}

export default Friends;

