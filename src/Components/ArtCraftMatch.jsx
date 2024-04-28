import { useLoaderData } from "react-router-dom";

const ArtCraftMatch = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div className="card lg:mx-32 border-2 mt-5 md:mt-10 mx-5 bg-base-100 ">
            <h2 className="md:text-4xl text-[#D74B76] pt-2 md:pt-6 underline text-center font-extrabold mb-6">{data.name}</h2>
            <figure><img className="w-full md:h-[800px]" src={data.photo} alt="image" /></figure>
            <div className="card-body">

                <p className="md:text-xl">{data.description}</p>
                <div className="divider mb-0 "></div>
                <div className="md:px-10 mt-10 text-gray-600 font-bold md:text-2xl space-y-3 md:space-y-8">
                    <div className="md:flex ">

                        <p className="text-xl">Processing Time: <span className="text-[#5F0F40]">{data.time}</span></p>
                    </div>
                   
                </div>
            </div>
        </div>


    );
};

export default ArtCraftMatch;
