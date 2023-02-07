import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from './Components/AppProvider';
import SignIn from './Components/SignIn';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Auth from './auth';

console.log('is', Auth.isAuthenticated());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            Auth.isAuthenticated() ? (
              <Navigate to={'/app'} replace />
            ) : (
              <SignIn />
            )
          }
        />
        <Route
          path='/app'
          element={
            Auth.isAuthenticated() ? <App /> : <Navigate to={'/'} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
