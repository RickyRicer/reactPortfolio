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
                    <p>{("Hi, I'm Rick! I'm a passionate web developer who loves creating elegant and efficient code.")}</p>
                </div>
                <div>
                    <p>{("Hello there! I’m a full-stack web developer with a passion for crafting seamless digital experiences. With a background in the automotive industry and years of hands-on coding, I bring a problem-solving mindset to every project. I specialize in TypeScript, React, and Node.js, building everything from dynamic web applications to smart contracts on Ethereum and Solana. I also have experience integrating payment systems like Stripe and scheduling systems such as Calendly, making online commerce smooth and secure. Whether it’s optimizing a front-end interface, architecting a back-end system, or creating automated Discord bots, I love bringing ideas to life through code. Let’s build something awesome together!")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
