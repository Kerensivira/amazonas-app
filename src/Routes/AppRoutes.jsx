import React from 'react'
import { BrowserRouter, Route, Routes  } from "react-router-dom";


const AppRouters = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<SplashScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouters