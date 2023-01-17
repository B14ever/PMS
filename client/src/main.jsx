import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import './Localazation/config'
import App from './App'
import './App.css'
import { ContextProvider } from './Context/Contexts'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
