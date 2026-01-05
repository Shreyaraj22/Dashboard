import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">

       
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

  
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Create Your Account
        </h2>

        <p className="text-sm text-gray-500 mt-1 text-center">
          Join True-Viu and start your interview journey
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name=" name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name=" email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@company.com"
              className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Company (Optional)
            </label>
            <input
              type="text"
              name=" company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Account Type
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select your role</option>
              <option value="candidate">Candidate</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name=" password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters long
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer border-b border-blue-600 font-medium"
          >
            Sign in
          </span>
        </p>

        <p className="text-xs text-center text-gray-400 mt-4">
          By creating an account, you agree to our{" "}
          <span className="text-blue-600">Terms of Service</span> and{" "}
          <span className="text-blue-600">Privacy Policy</span>
        </p>
      </div>
    </div>
  );

}