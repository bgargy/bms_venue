import React, { useState } from 'react';
import bmsceAbout from "./bmsceAbout.png";
import aboutCS from "./AboutCS.png";
import "./Home.css";

const Home = ({ isMenuShown }) => {
  const [modalContent, setModalContent] = useState({
    name: '',
    year: '',
    department: '',
    motto: '',
  });

  const developers = [
    { name: 'Gargi Bharadwaj', year: '2nd Year', department: 'Computer Science', motto: 'Coding Enthusiast', image: 'https://media.licdn.com/dms/image/D5603AQG7bqjYyYRgcQ/profile-displayphoto-shrink_200_200/0/1703607512258?e=2147483647&v=beta&t=uvEMoTBLuGuFpmfSb6VR52ThTRr73IL798-jGFzNs2Y' },
    { name: 'Gaurav Ramachandra', year: '2nd Year', department: 'Computer Science', motto: 'Innovation is the key', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVg7qdmrMFpGFTGw6jqyqaaPYOd3t5a-aViUnG0sK3EALA607-bWs211oJHew5wsmpQfc&usqp=CAU' },
    { name: 'GurralaNaga Pragnathmik', year: '2nd Year', department: 'Computer Science', motto: 'Innovate with Passion, Code with Precision', image: 'https://media.licdn.com/dms/image/D5603AQFM_5FbVocW1Q/profile-displayphoto-shrink_400_400/0/1696397174808?e=1711584000&v=beta&t=BUM5QPNZr9QYJK03rtnKqVnI51Uorcvg3mdBL6cRihY' },
    { name: 'Gayatri Yatagiri', year: '2nd Year', department: 'Computer Science', motto: 'Empowering Tomorrow through Todays code', image: 'https://media.licdn.com/dms/image/D5603AQHcjvxnhPSWcA/profile-displayphoto-shrink_800_800/0/1705680710585?e=1711584000&v=beta&t=SCSSj-5umCx-W65y29OY7jd2x3TtW8fHk4bJ6V-wOvY' },
    { name: 'Rekha GS (Project Guide)', year: 'Asst. Proff.', department: 'Computer Science', motto: 'Guiding with Experience', image: 'https://webcampus.bmsce.in/assets/faculty/CS/Rekha_G_S_.JPG' },
  ];

  const showDetails = (name, year, department, motto) => {
    setModalContent({
      name,
      year,
      department,
      motto,
    });
  };

  const closeModal = () => {
    setModalContent({
      name: '',
      year: '',
      department: '',
      motto: '',
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={bmsceAbout}  alt="BMSCE About"  className="background-image" />

      <div className="absolute inset-0 flex flex-col items-center justify-center" id="backgroundStyle">        
        <br />        
        <img src={aboutCS} alt="About CS"  className="about-cs-image"  />
        <div>
          <br/>          
        </div>        
      </div>                     
          <div className="main">
              <div className="developers">                  
              {developers.map((developer, index) => (
              <div key={index} className="developer" onClick={() => showDetails(developer.name, developer.year, developer.department, developer.motto)}>
                <img src={developer.image} alt={developer.name} className="photo" />
                <span className="name">{developer.name}</span>
              </div>
            ))}                  
              </div>

              <div className="about">
              <header className="header">
                <h1>Developer Team</h1>
              </header>
                  <h2 className="section-title">About Us</h2>
                  <p className="section-text">
                  <b>BMS College of Engineering (BMSCE)</b> is an autonomous private engineering institute located in
                    Bangalore,
                    India. It was established in 1946 by Bhusanayana Mukundadas Srinivasaya (BMS) Institute of Technology
                    Trust. It is one of the oldest engineering colleges in India and is affiliated to the Visvesvaraya
                    Technological University (VTU). The college offers undergraduate and postgraduate courses in various
                    branches of engineering and technology, and is recognized by the All India Council for Technical
                    Education (AICTE).
                  </p>
              </div>
          </div>
      
      <div id="developerModal" className="modal">
              <span className="close-btn" onClick={closeModal}>&times;</span>
              <p id="modalName">Name: {modalContent.name}</p>
              <p id="modalYear">Year of Study: {modalContent.year}</p>
              <p id="modalDepartment">Department: {modalContent.department}</p>
              <p id="modalMotto">Motto: {modalContent.motto}</p>
        </div>
        
    </div>
  );
};

export default Home;
