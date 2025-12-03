import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCountries } from '../contexts/CountryContext'

const CountryEdit = () => {
  const { id } = useParams()
  const [nombre, setNombre] = useState('')
  const [capital, setCapital] = useState('')
  const [continente, setContinente] = useState('')
  const [population, setPopulation] = useState('')
  const [area, setArea] = useState('')
  const [gini, setGini] = useState('')
  const [borders, setBorders] = useState('')
  const [flag, setFlag] = useState('')
  const [error, setError] = useState()

  const navigate = useNavigate()
  const { countries, updateCountry } = useCountries()

  useEffect(() => {
    const currentCountry = countries.find((country) => country._id === id)
    if (currentCountry) {
      setNombre(currentCountry.nombre || '')
      setCapital(currentCountry.capital?.join(', ') || '')
      setContinente(currentCountry.continente || '')
      setPopulation(currentCountry.population || '')
      setArea(currentCountry.area || '')
      setGini(currentCountry.gini || '')
      setBorders(currentCountry.borders?.join(', ') || '')
      setFlag(currentCountry.flag || '')
    }
  }, [id, countries])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      nombre.trim() === '' ||
      capital.trim() === '' ||
      continente.trim() === '' ||
      population.toString().trim() === '' ||
      flag.trim() === ''
    ) {
      setError('Por favor completa los campos obligatorios.')
      return
    }

    try {
      await updateCountry(id, {
        nombre,
        capital: capital.split(',').map((c) => c.trim()),
        continente,
        population: Number(population),
        area: area ? Number(area) : undefined,
        gini: gini ? Number(gini) : undefined,
        borders: borders ? borders.split(',').map((b) => b.trim()) : [],
        flag
      })
      navigate(`/countries/${id}`)
    } catch (err) {
      setError('Error al actualizar el país.')
      console.error('Error updating country:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full p-6 rounded">
        <h2 className="text-2xl font-bold mb-4 text-white">Actualizar País</h2>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <label className="text-white font-medium">Nombre del país</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">Capital (separar con comas si son varias)</label>
          <input
            type="text"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">Continente</label>
          <input
            type="text"
            value={continente}
            onChange={(e) => setContinente(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">Población</label>
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">Área (opcional)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">Índice Gini (opcional)</label>
          <input
            type="number"
            value={gini}
            onChange={(e) => setGini(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">Fronteras (separar con comas)</label>
          <input
            type="text"
            value={borders}
            onChange={(e) => setBorders(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <label className="text-white font-medium">URL de la bandera</label>
          <input
            type="text"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded"
          >
            Actualizar País
          </button>

          <button
            type="button"
            onClick={() => navigate('/countries')}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-medium rounded"
          >
            Volver a Países
          </button>
        </form>
      </div>
    </div>
  )
}

export default CountryEdit
