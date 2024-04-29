import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Match from "./Match";

const ArtCraftMatch = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://assignment-ten-server-xi-nine.vercel.app/crafts')
            .then(res => res.json())
            .then(data => {
              
                const filteredItems = data.filter(item => item.item === name);
                setItems(filteredItems);
            });
    }, [name]); 
    return (  <div>
        <div>
        <h1  className="text-3xl md:text-5xl pt-4 mb-9 underline text-red-900 font-extrabold text-center">All Related Data</h1>
        </div>
     
         <div  className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-20 gap-10">
            {items.map(item => <Match key={item._id} item={item}></Match>)}
        </div>
       </div>
    );
};

export default ArtCraftMatch;
