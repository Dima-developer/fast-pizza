import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import store from './redux/store';
import {Provider} from 'react-redux';

//console.log(store.getState());

ReactDOM.render(
    //<React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>,
    //</React.StrictMode>
  document.getElementById('root')
);


