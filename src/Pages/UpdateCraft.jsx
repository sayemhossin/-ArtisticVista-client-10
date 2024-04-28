import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCraft = () => {
    const craft = useLoaderData()
    console.log(craft)


const handleUpdate = (e) =>{
e.preventDefault()
const form = e.target;

const item = form.item.value.toUpperCase();
const subcategory = form.subcategory.value
const price = form.price.value
const rating = form.rating.value
const photo = form.photo.value
const customization = form.customization.value
const processing = form.processing.value
const stock = form.stock.value
const description = form.description.value

const updateCraft = {item,subcategory,price,rating,photo,customization,processing,stock,description}


fetch(`http://localhost:5000/crafts/${craft._id}`,{
method:'PUT',
headers:{'content-type': 'application/json'},
body: JSON.stringify(updateCraft)
})
.then(res => res.json())
.then(data =>{
    console.log(data)
    if(data.modifiedCount > 0){
       toast.success('Updated Successfully')
    }
})


}



    return (
        <div style={{
            backgroundImage:'url(https://i.ibb.co/z8634fN/360-F-339060225-w8ob8-Lj-MJz-Pd-Eq-D9-UFxb-E6ibc-Kx8d-Fr-P.jpg)',
          backgroundSize:'cover'
         
        }} className="bg-rose-300">
            <h1  className="text-3xl md:text-5xl pt-4 underline text-red-900 font-extrabold text-center">Update Craft Item</h1>
            <form onSubmit={handleUpdate} className="p-6 md:p-10">
             <div className="grid md:grid-cols-2 gap-5">
             <div>
                    <h1 className="text-2xl font-bold">Item Name:</h1>
                    <input defaultValue={craft.item} className="w-full  text-xl h-14 bg-white rounded-xl p-4" type="text" name="item" id="" placeholder="Item Name" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Subcategory Name:</h1>
                    <input defaultValue={craft.subcategory}  className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="subcategory" id="" placeholder="Subcategory" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Price:</h1>
                    <input defaultValue={craft.price}  className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="price" id="" placeholder="Price" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Rating:</h1>
                    <input defaultValue={craft.rating}  className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="rating" id="" placeholder="Rating" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Image Url:</h1>
                    <input defaultValue={craft.photo}  className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="photo" id="" placeholder="Image Url" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Customization:</h1>
                    <input defaultValue={craft.customization}  className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="customization" id="" placeholder="Customization" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Processing Time:</h1>
                    <input defaultValue={craft.processing} className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="processing" id="" placeholder="Processing Time" required/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Stock Status:</h1>
                    <input defaultValue={craft.stock} className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="stock" id="" placeholder="Stock Status" required/>
                </div>
             </div>
                <div className="mt-4">
                    <h1 className="text-2xl font-bold">Short Description:</h1>
                    <input defaultValue={craft.description} className="w-full text-xl h-14 bg-white rounded-xl p-4" type="text" name="description" id="" placeholder="Description" required/>
                </div>
             <input className="btn w-full text-xl text-[#240A34] font-extrabold  md:text-4xl bg-[#803D3B] mt-5  " type="submit" value="Update Item" />
                
            </form>
           
        </div>
    );
};

export default UpdateCraft;