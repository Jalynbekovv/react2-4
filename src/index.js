import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducers/store";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);