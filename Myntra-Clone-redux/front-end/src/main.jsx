import React from 'react'
import ReactDOM from 'react-dom/client'
import Bag from './routes/Bag';
import Home from './routes/Home';
import App from './routes/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from "react-redux"
import store from '../src/store/index';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>


  </React.StrictMode>,
)
