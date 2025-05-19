import { useState } from 'react'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from './pages/Informacion';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {
  return (
    <>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element= {<Login/>}/>
              <Route element = {<PrivateRoute/>}>
                <Route path='/dashboard' element={<Dashboard/>} />
              </Route>
              <Route path='/information' element={<Information/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App
