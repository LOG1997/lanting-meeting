import React from 'react'
import ReactDOM from 'react-dom/client'
// import fastclick from 'fastclick';
// fastclick.attach(document.body);
import 'virtual:svg-icons-register'
import 'virtual:windi.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
