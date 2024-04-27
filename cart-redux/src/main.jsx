import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './state/store.js'
import { Provider } from 'react-redux'
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
