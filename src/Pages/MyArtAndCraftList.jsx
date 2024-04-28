import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import MyArtAndCraftListPage from "./MyArtAndCraftListPage";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const MyArtAndCraftList = () => {


    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext) || {}

const [arr,setArr] = useState(true)

    // console.log(user)
const [cards,setCards] = useState([])
const [sort,setSort]  = useState([])

const handleFilter = filter =>{
    if(filter == 'all'){
        setSort(cards)
    }
    else if(filter == 'portrait'){
        const portrait = cards.filter(card => card.item === 'PORTRAIT DRAWING')
        setSort(portrait)
    }
    else if(filter == 'watercolor'){
        const watercolor = cards.filter(card => card.item === 'WATERCOLOUR PAINTING')
        
        setSort(watercolor)
    }
    else if(filter == 'landscape'){
        const landscape = cards.filter(card => card.item === 'LANDSCAPE PAINTING')
       
        setSort(landscape)
    }
    else if(filter == 'oil'){
        const oil = cards.filter(card => card.item === 'OIL PAINTING')
        setSort(oil)
    }
    else if(filter == 'charcoal'){
        const charcoal = cards.filter(card => card.item === 'CHARCOAL SKETCHING')
        setSort(charcoal)
    }
    else if(filter == 'cartoon'){
        const cartoon = cards.filter(card => card.item === 'CARTOON DRAWING')     
   
        setSort(cartoon)
    }



}





const card = cards
console.log(card)
// console.log(cards)
useEffect(()=>{
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
    .then(res =>res.json())
    .then(data => {
        setCards(data)
        setSort(data)
        setLoading(false)
    })
},[user])



    return (
        <div>
            {loading ? (
                <div role="status">
                <svg aria-hidden="true" className="inline text-4xl ml-[50%] mt-[10%] w-10 h-10 text-gray-200 animate-spin dark:text-black fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            ) : <>
            <div>
                <h1 className="text-center text-4xl font-bold text-red-900 md:text-5xl underline mt-10">My Art&Craft List</h1>
            </div>
            <details className="dropdown ml-[30%] md:ml-[46%] rounded-xl mt-11 bg-red-900" onClick={()=>setArr(!arr)}>
  <summary className="m-1 btn border-0 text-xl text-gray-200  hover:bg-red-800 bg-red-900">  Sort By {arr?<FaArrowUp/>:<FaArrowDown/>}
  

  
  </summary>




  <ul className="p-2 shadow menu dropdown-content z-[1]  bg-base-100 rounded-box w-52">
    <li onClick={()=>handleFilter('all')}><a>all</a></li>
    <li onClick={()=>handleFilter('portrait')}><a>portrait</a></li>
    <li onClick={()=>handleFilter('watercolor')}><a>watercolor</a></li>
    <li onClick={()=>handleFilter('oil')}><a>oil</a></li>
    <li onClick={()=>handleFilter('charcoal')}><a>charcoal</a></li>
    <li onClick={()=>handleFilter('landscape')}><a>landscape</a></li>
    <li onClick={()=>handleFilter('cartoon')}><a>cartoon</a></li>
  </ul>
</details>
            
            <div className="grid mx-5 gap-10 mt-10">
                {
                    sort.map(card => <MyArtAndCraftListPage card={card}  key={card._id}></MyArtAndCraftListPage>)
                }
            </div>


            </>
            
            
            }
        </div>
    );
};

export default MyArtAndCraftList;