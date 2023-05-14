import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import{BrowserRouter , Route, Routes} from 'react-router-dom'
import Equipment from './pages/Equipment'
import User from './pages/User'
import UserEdit from './pages/userEdit'
import EquipmentEdit from './pages/EquipmentEdit'
import Create from './pages/Create'





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Home/>
    <Routes>
      
      <Route path="/equipment" element={<Equipment/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:id" element={<UserEdit/>}/>
      <Route path="/edit/:id" element={<EquipmentEdit/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
