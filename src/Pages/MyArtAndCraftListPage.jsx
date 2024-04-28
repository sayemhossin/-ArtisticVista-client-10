import { useState } from "react";
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const MyArtAndCraftListPage = ({card}) => {


const handleDelete =(id) =>{
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/crafts/${id}`,{
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data =>{
                  if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      window.location.reload();
                  }
             })
        }
      });



   




   
}

    return (
        <div className="  mx-auto py-4  border-2 rounded-xl">
  <div className="flex lg:gap-28 flex-col lg:flex-row">
    <img src={card.photo} className="lg:max-w-sm mx-5 mt-3 rounded-lg " />
    <div className="mt-3 space-y-4 md:space-y-9 px-4">
      <h1 className="md:text-5xl text-3xl font-bold">{card.item}</h1>
      <div className="divider"></div>
      <div className="flex text-xl justify-between  font-bold">
                    <p className="md:text-2xl">Price: <span className="text-[#5F0F40]">{card.price}$</span></p>
                    <p className="flex items-center">Rating: <span className="text-[#5F0F40] ml-2">{card.rating} </span> <FaStar className="text-[#FFC100]" /></p>
                </div>
              
               <p className="text-xl font-bold">Customization: <span className="text-[#5F0F40] ">{card.customization}</span></p>
               <p className=" text-xl"><span className="font-bold">Stock Details: </span><span className="text-[#5F0F40]">{card.stock}</span></p>


             <div className="flex gap-7 lg:ml-[600px] justify-end">
             <Link to={`/updatecraft/${card._id}`}><button data-tip="Update" className="text-2xl tooltip"><FaEdit /></button></Link>
  <button onClick={()=>handleDelete(card._id)} className="tooltip text-xl " data-tip="Delete"><FaTrashAlt /></button>
             </div>

               
    </div>
    
  </div>
</div>
    );
};

export default MyArtAndCraftListPage;