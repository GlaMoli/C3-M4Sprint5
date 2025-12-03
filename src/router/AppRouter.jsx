import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

// CRUD de Country
import CountryList from '../pages/CountryList'
import CountryDetail from '../pages/CountryDetail'
import CountryCreate from '../pages/CountryCreate'
import CountryEdit from '../pages/CountryEdit'

const AppRouter = () => {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />

      {/* Página About */}
      <Route path="/about" element={<About />} />

      {/* CRUD de Country */}
      <Route path="/countries" element={<CountryList />} />
      <Route path="/countries/create" element={<CountryCreate />} />
      <Route path="/countries/:id" element={<CountryDetail />} />
      <Route path="/countries/:id/edit" element={<CountryEdit />} />

      {/* Página NotFound */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
