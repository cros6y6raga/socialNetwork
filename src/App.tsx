import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

/*import Header from "./components/Header";
import List from "./components/List";*/
function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                    {/*<Route path={'/profile'} component={Profile}/>*/}
                    {/*<Route path={'/news'} component={News}/>*/}
                    {/*<Route path={'/music'} component={Music}/>*/}
                    {/*<Route path={'/settings'} component={Settings}/>*/}

                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

//1234
export default App;
