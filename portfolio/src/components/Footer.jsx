import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiCredly } from "react-icons/si";

const socials = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/DevaseeshKumar", color: "#8b5cf6" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sonti-devaseesh-kumar-37206627b/", color: "#0A66C2" },
  { name: "Email", icon: <MdEmail />, link: "mailto:devaseesh.sonti2005@gmail.com", color: "#D93025" },
  { name: "Credly", icon: <SiCredly />, link: "https://www.credly.com/users/sonti-devaseesh-kumar", color: "#1DA1F2" },
];

const Footer = () => {
  return (
    <footer className="relative py-8 text-center bg-white/30 dark:bg-[#0a192f]/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 transition-all duration-500">
      {/* Social Icons Row */}
      <div className="flex justify-center gap-6 mb-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl p-3 rounded-full transition-all duration-300"
            style={{ color: social.color }}
          >
            <span className="relative flex items-center justify-center group">
              {social.icon}
              <span
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-300"
                style={{ backgroundColor: social.color }}
              />
            </span>
          </a>
        ))}
      </div>

      {/* Footer Text */}
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
