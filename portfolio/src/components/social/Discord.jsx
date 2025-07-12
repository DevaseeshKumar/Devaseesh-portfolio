const Discord = () => {
  return (
    <a
      href="https://discord.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-2 duration-300 group"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
        alt="Discord"
        className="w-16 mx-auto mb-4 group-hover:scale-110 transition duration-300"
      />
      <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
        Join me on Discord
      </p>
    </a>
  );
};

export default Discord;
