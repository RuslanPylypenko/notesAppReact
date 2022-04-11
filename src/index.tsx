import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./components/App/App";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux";


const app = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
