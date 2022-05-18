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
                    <p>{("I started in the automotive industry, but fell in love with web design in 2021. A huge fan of building APIs, no challenge is too great! I'm a creative thinker, who loves a good puzzle. Let's build something awe inspring together!")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
