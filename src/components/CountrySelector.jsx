import React from 'react'
import CountryCard from './CountryCard.jsx'
import { useCountries } from '../contexts/CountryContext.jsx'
import { useNavigate } from 'react-router-dom'

const CountrySelector = () => {
  const { countries } = useCountries()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/90 text-white">
      <h1 className="text-2xl font-bold mb-6">
        ¿Qué país deseas ver ahora?
      </h1>

      <div className="flex flex-wrap gap-6 justify-center mx-10">
        {/* CountryCard */}
        {countries.map((country) => (
          <div
            key={country._id}
            onClick={() => navigate(`/countries/${country._id}`)}
            className="cursor-pointer"
          >
            <CountryCard country={country} />
          </div>
        ))}

        {/* add country component */}
        <div
          onClick={() => navigate('/countries/create')}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="w-24 h-16 flex items-center justify-center bg-gray-700 rounded-lg shadow-md">
            <span className="text-4xl font-bold">+</span>
          </div>
          <p className="mt-2 text-sm font-semibold">Agregar país</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/countries')}
        className="mt-8 px-6 py-2 font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg"
      >
        Administrar países
      </button>

      <button
        onClick={() => navigate('/')}
        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-2xl"
      >
        Volver al Home
      </button>
    </div>
  )
}

export default CountrySelector
