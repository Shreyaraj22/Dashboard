import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      
      
      <div className="w-32 h-32 flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="w-64 h-64 object-contain"
        />
      </div>

 
      <h1 className="text-3xl font-semibold mt-0 mb-0">
        Welcome back
      </h1>

      <p className="text-gray-900 mt-0 mb-6">
        Sign in to your True-Viu account
      </p>

    
      <div className="w-[380px] bg-white rounded-xl shadow-lg p-6">
        
        <div className="flex items-center gap-2 mb-4 text-gray-900">
          <span className="text-lg cursor-pointer">←</span>
          <span className="font-medium">Welcome Back</span>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Sign in to your True-Viu account
        </p>

     
        <label className="text-sm font-medium text-gray-900 flex items-center gap-2 mb-1">
          <MdOutlineMailOutline size={20} />
          Email Address
        </label>

        <input
          type="email"
          placeholder="your.email@company.com"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

    
        <label className="text-sm font-medium text-gray-900 flex items-center gap-2 mb-1">
          <RiLockPasswordLine size={20} />
          Password
        </label>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full pr-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

       
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-blue-600" />
            Remember me
          </label>
          <span className="text-blue-600 cursor-pointer">
            Forgot password?
          </span>
        </div>

      
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Sign In
        </button>

       
        <p className="text-sm text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium cursor-pointer border-b border-blue-600 hover:border-b-2 transition-all duration-200"
          >
            Sign Up
          </span>
        </p>

        <div className="my-4 border-t"></div>

        <p className="text-center text-sm text-gray-500 mb-3">
          Accounts
        </p>

        <div className="flex gap-3">
          <button className="flex-1 border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100 transition">
            Admin
          </button>
          <button className="flex-1 border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100 transition">
            Candidate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
