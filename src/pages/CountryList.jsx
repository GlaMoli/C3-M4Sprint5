import React, { useContext, useState } from "react";
import { CountryContext } from "../contexts/CountryContext";
import { useNavigate } from "react-router-dom";

const CountryList = () => {
  const { countries, loading, error, deleteCountry } = useContext(CountryContext);
  const navigate = useNavigate();

  // 🔹 Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 6; // cantidad de países por página

  if (loading) return <p className="text-center mt-6 text-white">Cargando países...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;

  // 🔹 Calcular índices de la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // 🔹 Número total de páginas
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  // 🔹 Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Lista de Países
      </h1>

      {/* Tabla de países (solo la página actual) */}
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="table-auto min-w-full border-collapse border border-gray-300 shadow-md bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Bandera</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Capital</th>
              <th className="border px-4 py-2">Área</th>
              <th className="border px-4 py-2">Población</th>
              <th className="border px-4 py-2">Continente</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentCountries.map((c) => (
              <tr
                key={c._id}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="border px-4 py-2 text-center">
                  {c.flag ? (
                    <img
                      src={c.flag}
                      alt={`Bandera de ${c.nombre}`}
                      className="w-12 h-8 mx-auto"
                    />
                  ) : (
                    "Sin bandera"
                  )}
                </td>
                <td className="border px-4 py-2">{c.nombre}</td>
                <td className="border px-4 py-2">{c.capital?.join(", ")}</td>
                <td className="border px-4 py-2">{c.area}</td>
                <td className="border px-4 py-2">{c.population}</td>
                <td className="border px-4 py-2">{c.continente}</td>
                <td className="border px-4 py-2 space-x-2 text-center">
                  <button
                    onClick={() => navigate(`/countries/${c._id}`)}
                    className="cursor-pointer bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => navigate(`/countries/${c._id}/edit`)}
                    className="cursor-pointer bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteCountry(c._id)}
                    className="cursor-pointer bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded disabled:opacity-50"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`cursor-pointer px-4 py-2 rounded font-medium ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="cursor-pointer px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded disabled:opacity-50"
        >
          Siguiente
        </button>

        <button
          onClick={() => navigate('/')}
          className="cursor-pointer px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded"
        >
          Volver a Home
        </button>
      </div>
    </div>
  );
};

export default CountryList;
