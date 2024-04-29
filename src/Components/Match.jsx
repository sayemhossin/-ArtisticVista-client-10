import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Match = ({item}) => {
    console.log(item)
    return (
        <div className="card  bg-base-100 border-2 border-orange-200">
        <figure><img src={item.photo} alt="Shoes" /></figure>
        <div className="card-body md:space-y-4 text-gray-600">
            <h2 className="card-title  md:text-2xl font-extrabold">Item Name: {item.item}</h2>
            <p className="md:text-xl "><span className="font-bold">Subcategory Name:</span> {item.subcategory}</p>
            <div className="flex text-xl font-bold">
                <p>Price: {item.price} $</p>
                <p className="flex items-center">Rating: {item.rating} <FaStar className="text-[#FFC100]" /></p>
            </div>
            <p className=" text-xl"><span className="font-bold">Stock Details: </span>{item.stock}</p>

            <div className="card-actions justify-end">
                <Link to={`/craftdetails/${item._id}`}>
                <button className="relative inline-flex items-center justify-center p-4 px-2 md:px-6 py-1 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-300 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-400 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute text-[14px] md:text-xl flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
<span className="relative invisible">View Details</span>
</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Match;