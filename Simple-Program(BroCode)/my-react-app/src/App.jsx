import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Tutorial from './Project/1_React_Tutorial_For_Beginners/Tutorial'
import CardComponents from './Project/2_Card_Components/CardComponents'
import AddCSS from './Project/3_Add_CSS_Styles/addCSS'
import PropsHome from './Project/4_Props/PropsHome'
import ConditionalRendering from './Project/5_Conditional_Rendering/ConditionalRenderingHome'
import RenderHome from './Project/6_Render_Lists/RenderHome'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/Card" element={<CardComponents />} />
      <Route path="/CSS" element={<AddCSS />} />
      <Route path="/Props" element={<PropsHome />} />
      <Route path="/ConditionalRendering" element={<ConditionalRendering />} />
      <Route path="/RenderList" element={<RenderHome />} />
    </Routes>
  )
}