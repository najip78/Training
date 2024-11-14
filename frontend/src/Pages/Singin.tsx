import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';
import useMytrdata from '../store/Tr';
import goodluck from '../store/goodLuck';

// Define User interface
interface User {
  id: string;
  email: string;
  name: string;
}
const d = [{name:"dfssd",price:900},{name:"dfssd",price:900},{name:"dfssd",price:900},{name:"dfssd",price:900},{name:"dfssd",price:900}];

export default function SignIn() {
  const [products, setProducts] = useState(d);
  
  // 

 const {message,setMessage} = goodluck();

  // 
  const { login} =  useAuthStore();
  const [email, setEmail] = useState('');
  const [name,setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handlemessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(message);
    navigate('/home');
  }

  // Handle form submission for login

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login (replace with actual authentication API call)
    const mockUser: User = { id: '1', email, name: name };
    login(mockUser);
    navigate('/home'); // Redirect to home after login
  };

  return (
    <>
      <div className="signincontainer flex justify-start items-center min-h-screen bg-gray-100">
        <img
          className="rounded w-[50%] h-[100vh] border-t-4 border-[#c0ccda] shadow"
          src="https://i.pinimg.com/736x/27/77/24/277724b15a681f408c199f0f29659588.jpg"
          alt=""
        />
        <div className="w-full max-w-md p-8 space-y-6 ml-[2%] rounded-lg">
          <h1 className="text-3xl text-left text-gray-800">Sign In</h1>
          <p className="wlcm">Welcome back! Please sign in to continue.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Yourname@example.com"
                className="w-full px-4 py-2 mt-1 text-gray-800 border bg-transparent border-[#c0ccda] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email Address
              </label>
              <input
                type="text"
                placeholder="username"
                className="w-full px-4 py-2 mt-1 text-gray-800 border bg-transparent border-[#c0ccda] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>


            <div>
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <p>{products.length ? "sucess":"fail"}</p>
               <div className="productslist">
                 {products.map((product, index) => (
                    <p key={index}>{product.name} <button  onClick={() => setProducts(products.filter((_, i) => i !== index))}>delete</button></p>
                  ))}
                  // delete 
                  
        
  
               </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 text-gray-800 border bg-transparent border-[#c0ccda] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
          <h1>the messagge is:      {message}</h1>
          <form onSubmit={handlemessageSubmit} >
          <input type="text" onChange={(e) => setMessage(e.target.value)}  placeholder="Enter your password" className=' w-full px-4 py-2 mt-1 text-gray-800 border bg-transparent border-[#c0ccda] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ' />
           <button type='submit' className='w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600'>message........</button>
          </form>
          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-2/4 border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="w-2/4 border-gray-300" />
          </div>

          {/* Social Sign-In Buttons */}
          <div className="space-y-2">
            <button
              className="w-full py-2 font-bold text-blue-600 border-2 border-blue-600 rounded hover:bg-blue-100 flex items-center justify-center gap-2"
            >
              <span className="text-lg"></span>
              Sign In With Facebook
            </button>
            <button
              className="w-full py-2 font-bold text-blue-400 border-2 border-blue-400 rounded hover:bg-blue-100 flex items-center justify-center gap-2"
            >
              <span className="text-lg"></span>
              Sign In With Twitter
            </button>
          </div>

          <p className="text-left">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>


      <Footer />
    </>
  );
}
