import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome!</h1>
      <Link to="/tutorial">1. React Tutorial For Beginners</Link><br />
      <Link to="/Card">2. Card Components</Link><br />
      <Link to="/CSS">3. Add CSS Style</Link><br />
      <Link to="/Props">4. Props</Link><br />
      <Link to="/ConditionalRendering">5. Conditional Rendering</Link><br />
      <Link to="RenderList">6. Render Lists</Link>
    </div>
  )
}