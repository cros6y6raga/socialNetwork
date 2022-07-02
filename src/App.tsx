import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

/*import Header from "./components/Header";
import List from "./components/List";*/

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                   <Profile/>
            </div>
            {/*   <Profile/>*/}
        </div>
    );
}

//1234
export default App;
