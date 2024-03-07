
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './components/WelcomePage.jsx'
import RegisterPage from './components/AuthPages/RegisterPage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element= {<RegisterPage/>} />
      </Routes>
    </>
  )
}

export default App
