import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCountries } from '../contexts/CountryContext'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const CountryDetail = () => {
  const { id } = useParams()
  const { countries, deleteCountry } = useCountries()
  const navigate = useNavigate()

  // Buscar país por _id (MongoDB)
  const country = countries.find((c) => c._id === id)

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: '#d33',
      cancelButtonText: 'No, cancelar',
      draggable: true,
    })

    if (result.isConfirmed) {
      try {
        await deleteCountry(id)
        toast.success('País eliminado correctamente')
        navigate('/countries')
      } catch (err) {
        toast.error('Error al eliminar el país')
        console.error(err)
      }
    }
  }

  if (!country) {
    return (
      <p className="text-center mt-10 text-red-500">
        País no encontrado
      </p>
    )
  }

  return (
    <div className="text-center mt-10">
      {/* Bandera */}
      {country.flag ? (
        <img
          src={country.flag}
          alt={`Bandera de ${country.nombre}`}
          className="w-32 h-20 rounded-md shadow-md object-cover mx-auto mb-4 border-2 border-green-500"
        />
      ) : (
        <div className="w-32 h-20 flex items-center justify-center mx-auto mb-4 border-2 border-green-500 bg-gray-700 text-white rounded-md">
          Sin imagen
        </div>
      )}

      {/* Nombre */}
      <h1 className="text-3xl font-bold text-white">{country.nombre}</h1>
      <p className="text-gray-400">ID: {country._id}</p>

      {/* Otros campos */}
      <div className="mt-4 text-gray-300">
        <p><strong>Capital:</strong> {country.capital?.join(", ")}</p>
        <p><strong>Área:</strong> {country.area}</p>
        <p><strong>Población:</strong> {country.population}</p>
        <p><strong>Continente:</strong> {country.continente}</p>
        {country.gini && <p><strong>Índice Gini:</strong> {country.gini}</p>}
        {country.borders?.length > 0 && (
          <p><strong>Fronteras:</strong> {country.borders.join(", ")}</p>
        )}
      </div>

      {/* Botones */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate('/countries')}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-2xl"
        >
          Volver
        </button>

        <button
          onClick={() => navigate(`/countries/${country._id}/edit`)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-2xl"
        >
          Editar País
        </button>

        <button
          onClick={handleDelete}
          className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-2xl"
        >
          Eliminar País
        </button>
      </div>
    </div>
  )
}

export default CountryDetail
