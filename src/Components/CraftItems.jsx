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
        <div >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-20 gap-10">
        {
            items.slice(0,6).map(item => <CraftItem item={item} key={item._id}></CraftItem>)
          }
        </div>
        </div>
    );
};

export default CraftItems;