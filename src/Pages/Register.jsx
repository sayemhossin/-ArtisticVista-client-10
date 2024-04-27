import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Components/AuthProvider";



const Register = () => {
  const { createUser, updateUserProfile,logOut } = useContext(AuthContext)
  const [passwordValidation, setPasswordValidation] = useState('')
  const [show,setShow]= useState(false)



  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    const { email, name, password, photo } = data


    if (password.length < 6) {
      return setPasswordValidation('password should be 6 character')
    }

    if (!/[A-Z]/.test(password)) {
      return setPasswordValidation('password should have a uppercase letter')
    }
    if (!/[a-z]/.test(password)) {
     
      return setPasswordValidation('password should have a lowercase letter')
    }








    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success('Registered Successfully')
            logOut()
            .then()
            navigate('/login')
          })
      })
      .catch(err => {
        console.log(err)
      })

      
      setPasswordValidation('')
  }


  return (
    <div className="hero mt-14 mb-14">

      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl   text-[#215c9c] font-bold">Register Now!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered"
                {...register("photo")}
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
              <input name="password" type={show?'text':"password"} placeholder="password" className="input w-full input-bordered"
                {...register("password", { required: true })}
              />
             <span className="absolute right-2 top-4 cursor-pointer" onClick={()=>setShow(!show)}>{show?<FaEye></FaEye>:<FaEyeSlash/>}</span>
              </div>
             <p className="text-red-600"> {passwordValidation}</p>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}


            </div>
            <div className="form-control mt-6">
              <button className="btn border-0 bg-[#990000] hover:bg-[#7a1c1c] btn-primary">Register</button>
            </div>
          </form>
          <div>
            <p className="text-center">Have Account? <Link className="text-blue-800 font-bold" to={'/login'}>Login Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;