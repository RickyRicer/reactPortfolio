import React from 'react';
import { IndividualSkills } from '../components/IndividualSkills';

export const Skills = () => {


  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-yellow-300">{("Languages & Technology")}</p>
                <p className="py-4">{("Proficient in the following languages and technologies:")}</p>
            </div>
            <IndividualSkills/>
        </div>
    </div>
  )
}
