import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import LandingPage from './LandingPage';
import App from './App';
import './index.css';
import Profil from './Profil';
import Message from './Message';
import Friends from './Friends';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/connect" element={<Login />}></Route>
        <Route path='/landingpage' element={<LandingPage/>}></Route>
        <Route path='/Friends' element={<Friends/>}></Route>
        <Route path='/Message' element={<Message/>}></Route>
        <Route path='/Profil' element={<Profil/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
