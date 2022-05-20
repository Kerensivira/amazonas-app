import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Pages/Login'
import Registro from '../Pages/Registro'

const AppRouters = () => {
  return (
<Router>
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/registro' element={<Registro />}/>
 </Routes>
</Router>
  )
}

export default AppRouters