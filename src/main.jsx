import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Home/>} />
                  <Route path="/register" element={<div>register</div>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
