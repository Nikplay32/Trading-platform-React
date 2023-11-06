import React, { useState } from 'react';
import axios from 'axios';
import MainVideo from '../assets/video4.mp4';

const Registration = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');

  const handleSubmit = () => {
    if(email.length === 0){
      alert("Email has left Blank!");
    }
    else{
      const url = 'http://localhost/Trading-platform-React/php/register.php';
      let fData = new FormData();
      fData.append('email', email);
      fData.append('password', password);
      fData.append('username', username);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }

  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
      <video autoPlay loop muted id='video' className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src={MainVideo} type='video/mp4'/>
      </video>  
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        {/* Input fields for registration */}
        <input
          type="text"
          placeholder="Email"
          name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
          className="block border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} 
          className="block border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Username"
          name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} 
          className="block border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white rounded p-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
