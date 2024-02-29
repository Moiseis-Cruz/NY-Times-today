import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <section>
      <h1>Menu Principal</h1>
      <Outlet />
    </section>
  )
}

export default App
