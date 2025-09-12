import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-8 text-center bg-white/30 dark:bg-[#0a192f]/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 transition-all duration-500">
      <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
          MyPortfolio
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
