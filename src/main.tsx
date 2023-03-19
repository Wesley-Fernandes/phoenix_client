//react
import ReactDOM from 'react-dom/client';
import React from 'react';

//components
import { RouterProvider } from 'react-router-dom';
import {router} from './router';

//theme
import 'animate.css';
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
