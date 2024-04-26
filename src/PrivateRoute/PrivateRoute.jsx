import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext()
    const location = useLocation()
if(loading){
    return <div className="flex justify-center mt-[10%]">
    <div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin dark:border-blue-600"></div>
</div>
}

if(user){
    return children
}
return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;