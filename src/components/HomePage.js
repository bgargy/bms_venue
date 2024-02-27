import React from "react";
import bmsceAbout from "./bmsceAbout.png"; 

const Home = ({ isMenuShown }) => {
  const backgroundStyle = {
    backgroundColor: "black",
    color: "white" // Assuming you want white text on black background
  };

  const facts = [
    {
      id: 1,
      title: "Gargi",
      subtitle: "1BM22CS099",
    },
    {
      id: 2,
      title: "Gayatri",
      subtitle: "1BM22CS102",
    },
    {
      id: 3,
      title: "Pragna",
      subtitle: "1BM22CS103",
    },
    {
      id: 4,
      title: "Gaurav",
      subtitle: "1BM22CS100",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
  <img
    src={bmsceAbout}
    alt="BMSCE About"
    className="absolute inset-0 w-full h-full object-cover object-center z-0 filter drop-shadow"
  />

      <div className="absolute inset-0 flex flex-col items-center justify-center" style={backgroundStyle}>
        <h1 className="text-5xl lg:text-7xl">Campus Space</h1>
        <br />
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          Automate <span className="font-bold">College Venue</span> permissions
        </h1>

        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="bg-orange-400 text-white py-4 px-6 rounded-lg shadow-md text-center relative"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">{title}</h1>
              <p className="text-lg">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
