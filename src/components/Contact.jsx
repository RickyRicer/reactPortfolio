import React from 'react';


export const Contact = () => {


  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="https://getform.io/f/9c0b00e1-5bc6-4326-9146-07cac3251dbc" method="POST" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">{("Contact Me")}</p>
                <p className="text-gray-300 py-4">{("Fill out the form below, and I'll be in-touch ASAP!")}</p>
            </div>
            <input className= "my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name='name'/>
            <input className= "my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name='email'/>
            <textarea className="bg-[#ccd6f6] p-2 my-4" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center">{("Submit")}</button>
        </form>
    </div>
  )
}
