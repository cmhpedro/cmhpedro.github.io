import './App.css'

import { HashRouter, Route, Routes } from 'react-router'

import { TCC } from './pages/TCC'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<TCC />} />
        <Route path="/tcc" element={<TCC />} />
      </Routes>
    </HashRouter>
  )
}
