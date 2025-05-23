import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = ({words}) => {
  return (
   
      <h1 className="text-xl font-extrabold mb-4 text-center h-6 w-60 bg-gray-300 flex justify-center items-center mx-auto">
        <Typewriter
          words={words}
          loop={true}         
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>

  )
}

export default TypeWriter
