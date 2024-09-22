import React from "react";
import { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import InputBox from "../components/InputBox";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  


  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <h1 className="text-3xl">CREATE ACCOUNT</h1>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <InputBox
        label={"Name"}
        onChange={(e) => setUsername(e.target.value)}
        type={"text"}
      />
      <InputBox
        label={"Email"}
        onChange={(e) => setEmail(e.target.value)}
        type={"email"}
      />
      
      <InputBox
        label={"Password"}
        onChange={(e) => setPassword(e.target.value)}
        type={"password"}
      />

      <div className="w-full flex justify-between mt-[-8px] text-sm">
        <p className="cursor-pointer">Forgot Password ?</p>
        <Link to="/login">
          <p>Login here</p>
        </Link>
      </div>

      <button
        className="bg-black text-white font-light px-8 py-2 mt-4"
      
      >
        Create
      </button>
    </form>
  );
};

export default Register;
