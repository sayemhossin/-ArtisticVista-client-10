import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";

const MyArtAndCraftList = () => {
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext) || {}
    console.log(user)
const [cards,setCards] = useState([])
console.log(cards)
useEffect(()=>{
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
    .then(res =>res.json())
    .then(data => {
        setCards(data)
        setLoading(false)
    })
},[user])

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : <div>
                <h1 className="text3xl">My Art And Craft List {cards.length}</h1>
            </div>
            
            
            }
        </div>
    );
};

export default MyArtAndCraftList;