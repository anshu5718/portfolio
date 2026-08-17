import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { learnings } from '@/data/index'

const LessonLearned = () => {
  return (
    <div id = "learnings" className="py-6 flex flex-col items-center justify-center">
      <h1 className="heading text-center mb-10 md:text-3xl text-2xl font-bold"> 
        <span className="text-yellow-300">
          Notes {' '}
        </span>
        from the journey
      </h1>
      <div>
        <InfiniteMovingCards
          items={learnings}
          direction="right"
          />
      </div>
    </div>
  )
}

export default LessonLearned