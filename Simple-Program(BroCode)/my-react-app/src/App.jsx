import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Tutorial from './Project/1_React_Tutorial_For_Beginners/Tutorial'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
    </Routes>
  )
}