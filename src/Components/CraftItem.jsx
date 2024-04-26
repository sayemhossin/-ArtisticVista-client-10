import { Link } from "react-router-dom";

const CraftItem = ({item}) => {
       
    return (
        <div>
          <img src={item.photo} alt="" />
            <Link to={`/craftdetails/${item._id}`}>   <button className="btn">Details</button></Link>
        </div>
    );
};

export default CraftItem;