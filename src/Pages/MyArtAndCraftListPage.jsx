import { FaStar } from "react-icons/fa";

const MyArtAndCraftListPage = ({card}) => {
    return (
        <div className=" md:mx-20 lg:mx-52 p-6 border-2 rounded-xl">
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
             <button className="btn ">Update</button>
  <button className="btn ">Delete</button>
             </div>

               
    </div>
    
  </div>
</div>
    );
};

export default MyArtAndCraftListPage;