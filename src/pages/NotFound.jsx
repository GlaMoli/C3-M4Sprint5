import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-extrabold text-red-500 drop-shadow-lg mb-6">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-red-400 mb-4">
        Página no encontrada
      </h2>

      <p className="text-gray-400 mb-8 text-center max-w-md">
        Lo sentimos, la página que intentas acceder no existe o fue movida.
      </p>

      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl shadow-lg transition"
      >
        Volver al Home
      </button>
    </div>
  )
}

export default NotFound
