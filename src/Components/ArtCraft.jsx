import { Link } from "react-router-dom";

const ArtCraft = ({ art }) => {
  return (
    <div className=" md:mx-2 mb-5 lg:mx-40 p-6 border-2 rounded-xl">
      <div className="flex lg:gap-28 flex-col lg:flex-row">
        <img src={art.photo} className="lg:max-w-sm mx-5 mt-3 rounded-lg " />
        <div className="mt-3 space-y-4 md:space-y-9 px-4">
          <h1 className="md:text-5xl text-3xl font-bold">{art.name}</h1>
          <div className="divider"></div>
          <div className=" md:text-xl ">
            <p>{art.description}</p>

          </div>


          <p className=" text-xl"><span className="font-bold">Processing time: </span><span className="text-[#5F0F40]">{art.time}</span></p>


          <div className="flex justify-end">
            <Link to={`/artcraftmatch/${art.name}`}>
              <button className="relative inline-flex items-center justify-center p-4 px-2 md:px-6 py-1 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-300 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-400 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute text-[14px] md:text-xl flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View All</span>
                <span className="relative invisible">View All</span>
              </button>
            </Link>
          </div>


        </div>

      </div>
    </div>
  );
};

export default ArtCraft;