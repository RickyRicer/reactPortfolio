import React from 'react'


export const AboutMe = () => {


  return (
    <div name="about-me" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-300">{("About Me")}</p>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>{("Hi, I'm Rick! I'm a passionate web developer who loves creating front & back end code!")}</p>
                </div>
                <div>
                    <p>{("I may only have 1 year of experience in this industry, but you won't find anyone with more tenacity and passion for creating stunning web pages! From building flash pages in high school, and changing the design of myspace profiles, I've loved web design for decades. A huge fan of building APIs, no challenge is too great! I'm a creative thinker, who loves a good puzzle. At present, I'm learning typescript and solidity smart contracts.")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
