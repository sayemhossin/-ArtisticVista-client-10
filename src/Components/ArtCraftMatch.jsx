import { useEffect, useState } from "react";

const ArtCraftMatch = () => {

    const [artcraft,setArtcraft] = useState([])
console.log(artcraft)

    const [items,setItems] =useState([])

    console.log(items)
    useEffect(()=>{
        fetch('http://localhost:5000/crafts')
        .then(res =>res.json())
        .then(data =>{
            setItems(data)
        })
    },[])
     
    useEffect(()=>{
        fetch('http://localhost:5000/artcraft')
        .then(res => res.json())
        .then(data => {
            setArtcraft(data)
        })
    },[]) 

    const matchingItems = items.filter(item => artcraft.some(art => art.name === item.item));



    return (
        <div>
            {matchingItems.map((item, index) => (
                <div key={index}>
                    <p>Name: {item.item}</p>
                    {/* Add other details you want to display */}
                </div>
            ))}
        </div>
    );
};

export default ArtCraftMatch;