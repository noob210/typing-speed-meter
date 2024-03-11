import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import KeyboardTest from './components/KeyboardTest.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="keyboard-test" element={<KeyboardTest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
