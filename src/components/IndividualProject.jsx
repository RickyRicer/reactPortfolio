import React from "react";
import Blog from '../assets/blog-preview.png';
import EmployeeTracker from '../assets/employeeTracker.png';
import MoonBay from '../assets/moonbay.png';
import NamePass from '../assets/namepass-preview.png';
import Weather from '../assets/weather.png';



export const IndividualProject = () => {

  const projects = [
    { id: 1, name: "MoonBay", img: MoonBay, demo: 'https://moonbay.herokuapp.com/', code: 'https://github.com/theresaqueryforthat/MoonBay', desc: 'App using the OpenSea API to create a WEB2 NFT site'},
    { id: 2, name: "NamePassPro", img: NamePass, demo: 'https://namepass.herokuapp.com/', code: 'https://github.com/theresaqueryforthat/NamePassPro' },
    { id: 3, name: "Tech Blog", img: Blog, demo: 'https://tech-feed-rb.herokuapp.com/', code: 'https://github.com/RickyRicer/techBlogMVC' },
    { id: 4, name: "NamePass", img: NamePass, demo: 'https://theresaqueryforthat.github.io/namepass/', code: 'https://github.com/theresaqueryforthat/namepass' },
    { id: 5, name: "Employee Tracker", img: EmployeeTracker, demo: '#', code: 'https://github.com/RickyRicer/employeeTracker'},
    { id: 6, name: "Weather Dashboard", img: Weather, demo: 'https://rickyricer.github.io/Weather-Dashboard-Using-APIs/', code: 'https://github.com/RickyRicer/Weather-Dashboard-Using-APIs'}
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
            <div key={project.id} style={{backgroundImage: `url(${project.img})` }}className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">{project.name}</span>
              {/* <div>{project.desc}</div> */}
              <div className="pt-8 text-center">
                <a href={project.demo} >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href={project.code}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
