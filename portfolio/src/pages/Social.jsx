import React from "react";
import Discord from "../components/social/Discord";
import Facebook from "../components/social/Facebook";
import Git from "../components/social/Git";
import Linkedin from "../components/social/Linkedin";

const Social = () => {
  return (
    <section
      id="social"
      className="relative z-10 min-h-screen px-6 md:px-20 overflow-hidden
                 bg-transparent transition-colors duration-500 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
  Connect with <span className="text-blue-600 dark:text-blue-400">Me</span>
</h2>

        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10 rounded-full animate-pulse" />

        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
          You can find me on these platforms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Git />
          <Linkedin />
          <Discord />
          <Facebook />
        </div>
      </div>
    </section>
  );
};

export default Social;
