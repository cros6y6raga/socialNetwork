import React from 'react';
import './App.css';
import Header from "./components/Header";
import List from "./components/List";

function App() {
    return (
        <div className="App">
            <Header/>
            Hello, samurai! Let's go!
            <List/>
        </div>
    );
}

export default App;
