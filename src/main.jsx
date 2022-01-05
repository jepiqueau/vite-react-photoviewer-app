import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { defineCustomElements }  from 'jeep-photoviewer/dist/custom-elements';

defineCustomElements();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
