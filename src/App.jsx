import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-700 mb-4 text-center">
        Welcome to AgrowFresh
      </h1>
      
      <p className="text-xl text-gray-700 mb-8 max-w-2xl text-center">
        Fresh from farm to your table – quality seeds, tools, fertilizers & more
      </p>

      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300">
        Shop Now →
      </button>

      <div className="mt-12 text-sm text-gray-500">
        Built with Vite + React + Tailwind CSS v4
      </div>
    </div>
  );
}

export default App;