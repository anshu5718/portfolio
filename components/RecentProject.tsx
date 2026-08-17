import React from 'react'
import { div } from 'three/src/nodes/math/OperatorNode.js'
import { projects } from '../data/index'
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
const RecentProjects = () => {
  return (
    <div className = "py-10 flex flex-col items-center justify-center">
        <h1 className="heading text-center md:text-3xl text-2xl font-bold">
            A small selection of {' '}
            <span className = 'text-yellow-300'>
                recent projects
            </span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-12">            
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key = {id} className ="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] ">
                    <PinContainer title = {link} href = {link}>
                        <div className="relative flex items-center justify-center lg:h-[30vh] mb-2 sm:w-96 w-[80vw] overflow-hidden h-[20vh] ">
                            <div className="absolute w-full h-full overflow-hidden rounded-3xl bg-[#13162d]">
                                <img src="/bg.png" alt="bg-img" className="w-full h-full object-cover" />
                                <img
                                    src={img}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover object-top rounded-3xl"
                                    />
                            </div>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'> 
                            {des}
                        </p>
                        <div className = "flex items-center mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div
                                    key={icon}
                                    className="relative rounded-full bg-black border-2 border-[#13162d] w-10 h-10 flex items-center justify-center overflow-hidden hover:z-10 hover:scale-110 transition-transform duration-200"
                                    style={{
                                        marginLeft: index === 0 ? 0 : "-0.6rem",
                                        zIndex: iconLists.length - index,
                                    }}
                                    >
                                    <img
                                        src={icon}
                                        alt={icon}
                                        className="w-6 h-6 object-contain"
                                    />
                                    </div>
                                ))}
                            </div>
                            <div className = "flex items-center justify-center">
                                <p className = "text-sm md:text-xs lg:text-xl flext pr-2 text-yellow-300"> Check it out  </p>
                                <FaLocationArrow  className='ms' color = "#FCD34D"/>
                            </div>

                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects
