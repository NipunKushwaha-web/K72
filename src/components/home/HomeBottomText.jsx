import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <nav className='font-secondary flex items-center justify-center gap-2'>
      <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28 lg:bottom-72 font-primary lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className='lg:border-8 border-8 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-40 flex items-center px-1 lg:px-14 rounded-full uppercase transition-all duration-300 hover:-translate-y-2'>
        <Link className='text-[6vw]' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-8 border-8 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-40 flex items-center px-1 lg:px-14 rounded-full uppercase transition-all duration-300 hover:-translate-y-2'>
        <Link className='text-[6vw]' to='/agence'>agence</Link>
      </div>
    </nav>
  )
}

export default HomeBottomText