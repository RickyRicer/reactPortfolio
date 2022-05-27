import React from "react";


export const Contact = () => {


  return (
    <div name="contact" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">{("Contact Me")}</p>
          <p className="py-6">{("Click one of the icons to the left, or email me: rick.ansay@gmail.com")}</p>
        </div>
      </div>
    </div>
  );
};
