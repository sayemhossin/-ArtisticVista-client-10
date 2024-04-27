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
          <div className="md:mt-20 mt-9 mb-9 md:mb-20">
            <h1 className="md:text-5xl text-2xl mb-3 font-extrabold text-center text-orange-600">Explore Our Craft Collection</h1>
            <p className="text-center text-[14px] mx-auto lg:w-[1000px]">Explore a curated collection of artisanal creations, each crafted with passion and skill. Discover unique pieces ranging from handmade ceramics to intricate textiles, showcased in an elegant UI designed to inspire. Dive deeper into the craftsmanship with the View Details button, leading you to a page where every detail awaits.</p>
          </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-20 gap-10">
        {
            items.slice(0,6).map(item => <CraftItem item={item} key={item._id}></CraftItem>)
          }
        </div>
        </div>
    );
};

export default CraftItems;