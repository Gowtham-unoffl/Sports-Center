import React from "react";
import ChangePasswordForm from "./changePassword";
import image from "../../assets/images/signup.avif";

const ChangePassword: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-xl px-6 py-8 bg-white rounded-lg shadow-md border-4 border-dotted  border-gray-300">
        <div className="md:w-full border-r">
          <img
            src={image}
            alt="ChangePassword"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
        <div className="md:w-full p-4 ">
          <h1 className="mb-8 text-3xl font-bold text-center text-gray-800 ">
            Update Password{" "}
          </h1>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
