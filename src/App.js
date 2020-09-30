import React from 'react';

import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import ClientsList from "./pages/ClientsListPage/ClientsListPage";
import AddClient from "./pages/ClientAddPage/ClientAddPage";
import EditClient from "./pages/ClientEditPage/ClientEditPage";
import SearchClient from "./pages/SearchClientPage/SearchClientPage"
import logoMain from "./logo-main.png"

function App() {
    return (
        <div className='app'>
            <nav className='head'>
                <div className='container'>
                    {/*<img className='top-menu-logo' src={logoMain} width="160" height="40"/>*/}
                    <div className='item'>
                        <a href='/' className="link icon-list"></a>
                    </div>
                    <div className='item'>
                        <a href='/search' className="link icon-search"></a>
                    </div>
                    <div className='item'>
                        <a href='/add' className="link icon-add"></a>
                    </div>
                </div>
            </nav>

            <Router>
                <Switch>
                    <Route exact path='/' component={ClientsList}/>
                    <Route path='/add' component={AddClient}/>
                    <Route path='/edit/:id' component={EditClient}/>
                    <Route path='/search' component={SearchClient}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
