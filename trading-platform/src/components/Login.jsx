import React from 'react';
import MainVideo from '../assets/video4.mp4'


const Login = () => {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
    <video autoPlay loop muted id='video' className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src={MainVideo} type='video/mp4'/>
    </video>  
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Add input fields for email and password */}
        <input type="text" placeholder="Email" className="block border border-gray-300 rounded p-2 mb-4 w-full" />
        <input type="password" placeholder="Password" className="block border border-gray-300 rounded p-2 mb-4 w-full" />
        <button className="bg-blue-500 text-white rounded p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;