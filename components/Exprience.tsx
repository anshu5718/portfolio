import React from 'react'
import { workExperience } from '../data/index'
import {Button, MovingBorder} from './ui/MovingBorder'
const Exprience = () => {
  return (
    <div className="py-6 flex flex-col items-center justify-center">
      <h1 className="heading text-center md:text-3xl text-2xl font-bold"> 
        Experience {' '}
        <span className="text-yellow-300">
          & {' '}
        </span>
        Growth 
      </h1>
      <div className="w-full h-full grid lg:grid-cols-4 grid-cols-1 gap-10 items-center max-lg:mt-10 mt-8 lg:px-30 px-4">
        {workExperience.map((card) => (
            <Button key={card.id} 
                borderRadius="1.75rem"
                duration={Math.floor(Math.random() * 5001) + 9000}
                className="flex-1 text-white border-neutral-200 dark:border-slate-800 items-center justify-center gap-y-4"
                >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                    <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16 h-12" />
                    <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            {card.desc}
                        </p>
                    </div>
                    </div>
            </Button>
        ))}
      </div>
    </div>
  )
}

export default Exprience
