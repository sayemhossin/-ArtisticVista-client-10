import { Link } from "react-router-dom";

const Register = () => {

const handleRegister = e =>{
    e.preventDefault()
const name = e.target.name.value
const email = e.target.email.value
const photo = e.target.photo.value
const password = e.target.name.value

console.log(name,email,password,photo)


}










    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
        
          </div>
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" name="photo" placeholder="PhotoUrl" className="input input-bordered" required />
              </div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div>
                <p>go to <Link to={'/login'}>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;