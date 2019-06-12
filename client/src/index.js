import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Main_Khach from './components/khach/main_khach'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import 'leaflet/dist/leaflet.js'
import 'leaflet/dist/leaflet.css'

import {Provider} from 'react-redux'
import Store from './components/store/store'
var store = Store()
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            {/* <main_khach /> */}
        </BrowserRouter>
    </Provider>


    , document.getElementById('root'));

serviceWorker.unregister();
