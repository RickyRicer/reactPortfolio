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
                    <p>{("Hello there! I'm Rick Ansay, a dedicated Full Stack Software Developer with a passion for creating meaningful digital experiences. Whether it's integrating Stripe for smoother payments, crafting intuitive Calendly scheduling features, or designing seamless demo flows, I thrive on leveraging technology to solve real-world problems. Beyond the screen, I'm a proud father who cherishes every moment with my family. When I'm not immersing myself in lines of code, you'll find me exploring the depths as a certified scuba diver or enjoying quality time with my beloved Bernese Mountain Dog, Mando. From diving into the crypto/NFT space to tinkering with 3D printers and delving into the worlds of video games and sci-fi, there's always something new to learn and discover. Life's an adventure, and I'm here to embrace every moment of it, both personally and professionally!")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
