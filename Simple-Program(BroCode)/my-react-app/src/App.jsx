import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Tutorial from './Project/1_React_Tutorial_For_Beginners/Tutorial'
import CardComponents from './Project/2_Card_Components/CardComponents'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/Card" element={<CardComponents />} />
    </Routes>
  )
}