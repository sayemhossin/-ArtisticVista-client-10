import { useEffect, useState } from "react";
import CraftItem from "./CraftItem";

const CraftItems = () => {

const [items,setItems] =useState([])
console.log(items)

useEffect(()=>{
    fetch('http://localhost:5000/crafts')
    .then(res =>res.json())
    .then(data =>{
        setItems(data)
    })
},[])
 
    return (
        <div>
          {
            items.map(item => <CraftItem item={item} key={item._id}></CraftItem>)
          }
        </div>
    );
};

export default CraftItems;