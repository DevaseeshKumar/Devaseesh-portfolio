// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center border-t mt-10">
      <p className="text-gray-600">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;