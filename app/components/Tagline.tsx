import { Typewriter } from 'react-simple-typewriter';

const Tagline = () => {
  return (
    <p className="text-xl md:text-2xl text-[#7c3aed]">
      <Typewriter
        words={[
          "Full Stack Developer",
          "MERN Enthusiast",
          "AI Enthusiast in Training"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </p>
  );
};

export default Tagline;
