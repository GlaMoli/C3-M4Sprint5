import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/mapa.jpg')", // asegúrate que mapa.jpg esté en /public
      }}
    >
      {/* Overlay para oscurecer la imagen */}
      <div className="bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
        <h1 className="text-5xl font-extrabold text-amber-400 drop-shadow-lg mb-6">
          Bienvenido 
        </h1>
        <h2 className="text-2xl font-semibold text-white drop-shadow-md">
          Explora, crea y gestiona países fácilmente 
        </h2>


        {/* Botones principales de navegación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Listado de países */}
          <button
            onClick={() => navigate('/countries')}
            className="px-6 py-3 bg-amber-400 text-gray-900 rounded-lg shadow-md hover:bg-amber-500 transition"
          >
            Ver Países
          </button>

          {/* Crear país */}
          <button
            onClick={() => navigate('/countries/create')}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Crear País
          </button>

          <button
            onClick={() => navigate('/selector')}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            Selector de Países
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
