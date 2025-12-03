import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} PaísesApp. Todos los derechos reservados.
        </p>
        <p className="text-sm text-amber-400">
          Desarrollado por Gladys ✨
        </p>

        {/* Links rápidos */}
        <div className="flex space-x-4 mt-2">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/countries" className="hover:text-amber-300 transition">Lista</Link>
          <Link to="/countries/create" className="hover:text-amber-300 transition">Crear</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
