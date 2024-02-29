import React from "react";
import bmsceAbout from "./bmsceAbout.png";
import aboutCS from "./AboutCS.png"; // Import the new image
import "./Home.css";

const Home = ({ isMenuShown }) => {
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
        className="background-image"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center" id="backgroundStyle">
        
        <br />
        
        <img
          src={aboutCS}
          alt="About CS"
          className="about-cs-image"
        />
        <div>
          <br/>
          
        </div>
        <div className="grid" id="factsGrid">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="factCard"
            >
              <h1 className="factTitle">{title}</h1>
              <p className="factSubtitle">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
