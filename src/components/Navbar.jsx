import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-amber-400">
          🌍 App Paises
        </Link>

        {/* Botón hamburguesa (solo en mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/countries" className="hover:text-amber-300 transition">Lista</Link>
          <Link to="/countries/create" className="hover:text-amber-300 transition">Crear</Link>
          <Link to="/about" className="hover:text-amber-300 transition">About</Link>
        </div>
      </div>

      {/* Menú desplegable (mobile) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block hover:text-amber-300 transition">Home</Link>
          <Link to="/countries" className="block hover:text-amber-300 transition">Lista</Link>
          <Link to="/countries/create" className="block hover:text-amber-300 transition">Crear</Link>
          <Link to="/about" className="block hover:text-amber-300 transition">About</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
