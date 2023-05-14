import React from 'react'
import ReactDOM from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import App from './App.jsx'
import './index.css'
import equipmentReducer from './reducers/equipmentReducer.jsx'
import UserReducer from './reducers/UserReducer.jsx'
import {Provider} from 'react-redux'



const store = configureStore({
  reducer: {
    equipment: equipmentReducer,
    users:UserReducer
  
    
    
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
