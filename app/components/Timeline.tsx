'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ item, index }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="relative flex items-center w-full">
      {/* Connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
      
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
      >
        {/* Circle indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-md" />

        {/* Card */}
        <div className="w-5/12 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200">
          <h3 className="text-xl font-bold text-blue-800">{item.title}</h3>
          <p className="text-gray-600 font-medium">{item.institution}</p>
          <p className="text-sm text-gray-500 mt-1">{item.date}</p>
          <p className="mt-2 text-gray-700">{item.description}</p>
          <p className="mt-2 text-blue-600 font-semibold">{item.fullDesc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function Timeline({ items }: any) {
  return (
    <div className="relative container mx-auto px-6 py-12">
      {/* Vertical Thread */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-600 h-full" />
      
      {items.map((item: any, index: number) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}
