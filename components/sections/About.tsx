import React from 'react'

const About = () => {
  return (
  <div
      id="about"
      className="flex flex-col bg-gray-500 text-white w-full p-10 gap-9 h-fit"
    >
      <div className="flex flex-row items-center gap-4 pl-5">
        <h2 className="border-r p-3 text-4xl">About Us</h2>
        <p className="text-xl">
          Learn more about our company, our mission, and our team.
        </p>
      </div>
    </div>
  )
}

export default About
