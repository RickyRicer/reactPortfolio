import React from "react";
import OrtopediaVidaPage from '../assets/ortopediavida.jpg';
import ToDoList from "../assets/todolist.jpg"
import ShoppingCart from "../assets/shopping-cart-practice.jpg"

export const IndividualProject = () => {

  const projects = [
    { id: 1, name: "Ortopedia Vida Page", img: OrtopediaVidaPage, demo: 'https://ocampott.github.io/ortopedia-vida-webpage-coder/', code: 'https://github.com/ocampott/ortopedia-vida-webpage-coder'},
    { id: 2, name: "To do list App", img: ToDoList, demo: 'https://ocampott.github.io/lista-de-tareas-app-react/', code: 'https://github.com/ocampott/lista-de-tareas-app-react' },
    { id: 3, name: "Shopping cart", img: ShoppingCart, demo: 'https://ocampott.github.io/shopping-cart-practice/', code: 'https://github.com/ocampott/shopping-cart-practice' },
    { id: 4, name: "Shopping cart", img: ShoppingCart, demo: 'https://ocampott.github.io/shopping-cart-practice/', code: 'https://github.com/ocampott/shopping-cart-practice' },
    { id: 5, name: "To do list App", img: ToDoList, demo: 'https://ocampott.github.io/lista-de-tareas-app-react/', code: 'https://github.com/ocampott/lista-de-tareas-app-react'},
    { id: 6, name: "Ortopedia Vida Page", img: OrtopediaVidaPage, demo: 'https://ocampott.github.io/ortopedia-vida-webpage-coder/', code: 'https://github.com/ocampott/ortopedia-vida-webpage-coder'}
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
