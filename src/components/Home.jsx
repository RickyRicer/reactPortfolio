import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import CV from '../assets/Rick-A-Ansay.pdf'

export const Home = () => {


  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-yellow-300">{("Hello there, my name is")}</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Rick Ansay</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><Typewriter options={{strings: ["I'm a Full Stack Web Developer.", "Creative, Problem-Solver, Well-Organized."], autoStart: true, loop: true}} /></h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">{("Welcome to my portfolio. I look forward to helping you achieve you next project's goal! I'm always challenging myself to learn new things!")}</p>
            <div>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300">
                    {("Projects")}
                    </button>
                </Link>
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300">
                    <a href={CV} download="CV Rick Ansay">{("Resume")}</a>
                </button>
            </div>
        </div>
    </div>
  )
}
