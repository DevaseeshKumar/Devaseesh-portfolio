import React from "react";
import Discord from "../components/social/Discord";
import Facebook from "../components/social/Facebook";
import Git from "../components/social/Git";
import Linkedin from "../components/social/Linkedin";

const Social = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 animate-fade-in">
        Connect with <span className="text-blue-600">Me</span>
      </h2>
      <p className="text-center text-gray-600 text-lg mb-12 animate-fade-in delay-100">
        You can find me on these platforms:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Discord />
        <Facebook />
        <Git />
        <Linkedin />
      </div>
    </section>
  );
};

export default Social;
