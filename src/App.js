import React from 'react';

import Header from './components/Header/Header'
import Main from './components/Main'

import './App.css'

const App = () => {
    return (
        <div>
            <Header/>
            <div className={"Main"}>
                <Main/>
            </div>
        </div>
    )
}

export default App;