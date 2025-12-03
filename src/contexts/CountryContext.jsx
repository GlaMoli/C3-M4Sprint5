import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// Crear el contexto
export const CountryContext = createContext();

// URL del  backend
const API_URL = import.meta.env.VITE_API_URL + "/countries";
const API_URL = "https://c3m4-sprint5.onrender.com/api/countries";

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar países al montar el componente
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(API_URL);
        setCountries(res.data);
      } catch (err) {
        console.error("Error al obtener países:", err);
        setError("No se pudieron cargar los países");
        toast.error("Error al cargar países");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Crear país
  const createCountry = async (newCountry) => {
    try {
      const res = await axios.post(API_URL, newCountry);
      setCountries([...countries, res.data]);
      toast.success("País creado con éxito 🎉");
    } catch (err) {
      console.error("Error al crear país:", err);
      toast.error("Error al crear país");
    }
  };

  // Eliminar país con confirmación
  const deleteCountry = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar país?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setCountries(countries.filter((c) => c._id !== id));
        toast.success("País eliminado correctamente 🗑️");
      } catch (err) {
        console.error("Error al eliminar país:", err);
        toast.error("Error al eliminar país");
      }
    }
  };

  // Actualizar país
  const updateCountry = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedData);
      setCountries(countries.map((c) => (c._id === id ? res.data : c)));
      toast.success("País actualizado correctamente ✨");
    } catch (err) {
      console.error("Error al actualizar país:", err);
      toast.error("Error al actualizar país");
    }
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        error,
        createCountry,
        deleteCountry,
        updateCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

// Hook personalizado
export const useCountries = () => {
  return useContext(CountryContext);
};
