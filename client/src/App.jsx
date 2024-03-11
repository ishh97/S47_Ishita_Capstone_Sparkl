
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './components/WelcomePage.jsx'
import RegisterPage from './components/AuthPages/RegisterPage.jsx'
import LoginPage from './components/AuthPages/LoginPage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element= {<RegisterPage/>} />
        <Route path= "/login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App
