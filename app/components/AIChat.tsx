'use client';
import { motion } from 'framer-motion';

export default function AIChat() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 right-8 bg-white p-4 rounded-xl shadow-xl"
    >
      <div className="flex items-center">
        <div className="h-3 w-3 bg-green-500 rounded-full mr-2" />
        <h3 className="font-semibold">AI Assistant</h3>
      </div>
      <p className="mt-2 text-sm">Ask me about my projects!</p>
    </motion.div>
  );
}