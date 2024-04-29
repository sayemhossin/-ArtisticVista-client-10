import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {

const items = useLoaderData()
console.log(items)



    return (
        <div>
            <h1 className="text-center underline mb-7 mt-7 font-bold text-xl md:text-4xl text-[#990000]">All Art And Craft Items Added By Users</h1>
          <div className="overflow-x-auto">
  <table  style={{
            backgroundImage:'url(https://i.ibb.co/z8634fN/360-F-339060225-w8ob8-Lj-MJz-Pd-Eq-D9-UFxb-E6ibc-Kx8d-Fr-P.jpg)',
          backgroundSize:'cover'
         
        }}  className="table text-xs md:text-xl">
    {/* head */}
    <thead>
      <tr className=" text-xs md:text-xl text-red-900">
        <th>No</th>
        <th>Item Name</th>
        <th>Stock details</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     {
        items.map((item,idx)=><tr key={item._id} className="hover:bg-[#f0baba]">
        <th>{idx +1}</th>
        <td>{item.item}</td>
        <td>{item.stock}</td>
        <td>{item.price}$</td>
        <td><Link to={`/craftdetails/${item._id}`}><button className="hover:text-[#990000] flex items-center">View Details <FaArrowRight/></button></Link></td>
      </tr>)
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllArtAndCraft;