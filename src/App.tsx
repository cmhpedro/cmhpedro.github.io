import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'

import { TCC } from './pages/TCC'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TCC />} />
        <Route path="/tcc" element={<TCC />} />
      </Routes>
    </BrowserRouter>
  )
}
