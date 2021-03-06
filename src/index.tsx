import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    ,
    document.getElementById('root')
);