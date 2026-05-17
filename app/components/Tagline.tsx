'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function Tagline() {
  return (
    <span>
      <Typewriter
        words={[
          'Backend Developer',
          'Go Engineer',
          'Full Stack Developer',
          'Microservices Architect',
          'API Design Specialist',
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1800}
      />
    </span>
  )
}
