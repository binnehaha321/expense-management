import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from "./store"
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider theme={{ 
          algorithm: theme.compactAlgorithm,
          token: {
            colorPrimary: "#00b96b"
          }
         }}>
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
