import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PeopleWrapper from './containers/PeopleWrapper';

import store from './store/store';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header py-4">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="display-4" id="swapi-title">SWAPI</div>
                            <div className="lead" id="swapi-subtitle">The Star Wars API</div>
                        </div>
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <div className="container mb-5">
                        <PeopleWrapper />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
