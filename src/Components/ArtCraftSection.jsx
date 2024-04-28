import { useEffect, useState } from "react";
import ArtCraft from "./ArtCraft";

const ArtCraftSection = () => {

const [artcraft,setArtcraft] = useState([])


useEffect(()=>{
    fetch('http://localhost:5000/artcraft')
    .then(res => res.json())
    .then(data => {
        setArtcraft(data)
    })
},[])




    return (
        <div>
            {
                artcraft.map(art => <ArtCraft art={art} key={art._id}></ArtCraft>)
            }
        </div>
    );
};

export default ArtCraftSection;