import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./global.css";
import { store } from './app/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import DetailsPage from './pages/DetailsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index={true} element={<Home />} />
        <Route path="/:name" element={<DetailsPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
