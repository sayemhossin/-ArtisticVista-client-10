import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CraftDetails = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/crafts')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, []);

    useEffect(() => {
        const selectedItem = items.find(i => i._id === id);
        if (selectedItem) {
            setItem(selectedItem);
        }
    }, [id, items]);

    return (
        <div>
            {item ? <>
                <p>Email: {item.price}</p>
                <img src={item.photo} alt="" />
                </> : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CraftDetails;
