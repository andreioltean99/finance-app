import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css'
import App from './App';
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <MemoryRouter >
            <App/>
        </MemoryRouter>
    </Provider>
);

