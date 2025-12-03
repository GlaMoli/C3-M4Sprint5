import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold mb-6 text-purple-400 drop-shadow-lg">
        Sobre Nosotros
      </h1>

      <p className="max-w-2xl text-center text-lg text-gray-300 mb-8">
        Esta aplicación permite gestionar tus países favoritos con un CRUD completo,
        navegación fluida y una experiencia moderna. Fue creada para demostrar buenas
        prácticas en React, TailwindCSS y Context API.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl shadow-lg transition"
      >
        Back to Previous Route
      </button>
    </div>
  )
}

export default About
