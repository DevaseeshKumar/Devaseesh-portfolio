import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a192f] py-6 text-center border-t border-gray-200 dark:border-gray-700 mt-10 transition-all duration-500">
      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          MyPortfolio
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
