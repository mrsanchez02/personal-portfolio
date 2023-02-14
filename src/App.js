import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Projects />} />
          <Route path='/' element={<Experience />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App