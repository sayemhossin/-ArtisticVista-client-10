import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className="text-7xl">Page Error</h1>
         <Link to={'/'}>   <button>Back</button></Link>
        </div>
    );
};

export default Error;