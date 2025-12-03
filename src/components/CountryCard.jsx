import React from "react";



const CountryCard = ({ country }) => {
  return (
    <div className="group relative flex flex-col rounded-xl bg-white/80 backdrop-blur shadow-md ring-1 ring-black/5 transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-white">
      {/* Bandera */}
      {country.bandera && (
        <div className="relative">
          <img
            src={country.bandera}
            alt={`Bandera de ${country.nombre}`}
            className="h-40 w-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-t-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* Nombre */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-slate-800 tracking-tight text-center">
          {country.nombre}
        </h2>
      </div>

      {/* Glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-100 to-indigo-100" />
    </div>
  );
};

export default CountryCard;
