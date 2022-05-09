import React from "react";
import MoonBay from '../assets/moonbay.png';
import Weather from '../assets/weather.png';
import ToDoList from "../assets/todolist.jpg";
// import ShoppingCart from "../assets/shopping-cart-practice.jpg";

export const IndividualProject = () => {

  const projects = [
    { id: 1, name: "MoonBay", img: MoonBay, demo: 'https://moonbay.herokuapp.com/', code: 'https://github.com/theresaqueryforthat/MoonBay'},
    { id: 2, name: "NamePassPro", img: ToDoList, demo: 'https://namepass.herokuapp.com/', code: 'https://github.com/theresaqueryforthat/NamePassPro' },
    { id: 3, name: "NamePass", img: Weather, demo: 'https://theresaqueryforthat.github.io/namepass/', code: 'https://github.com/theresaqueryforthat/namepass' },
    { id: 4, name: "Tech Blog", img: Weather, demo: 'https://tech-feed-rb.herokuapp.com/', code: 'https://github.com/RickyRicer/techBlogMVC' },
    { id: 5, name: "Employee Tracker", img: ToDoList, demo: 'https://ocampott.github.io/lista-de-tareas-app-react/', code: 'https://github.com/RickyRicer/employeeTracker'},
    { id: 6, name: "Weather Dashboard", img: Weather, demo: 'https://rickyricer.github.io/Weather-Dashboard-Using-APIs/', code: 'https://github.com/RickyRicer/Weather-Dashboard-Using-APIs'}
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
            <div key={project.id} style={{backgroundImage: `url(${project.img})` }}className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">{project.name}</span>
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
