import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Films from './Films';
import People from './People';
import Locations from './Locations';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                   
                    <Link to="/">
                    {' '}
                    <Button variant="outline-secondary" size="sm">
                            <span> Home</span>
                        </Button>{' '}
                       
                    </Link>

                    <Link to="/Films">
                    <Button variant="outline-secondary" size="sm">
                            <span> Films</span>
                        </Button>{' '}
                    
                    </Link>
                  
                    <Link to="/People">
                    
                    <Button variant="outline-secondary" size="sm">
                            <span> People</span>
                        </Button>{' '}
                    
                    </Link>

                    <Link to="/Locations">
                    <Button variant="outline-secondary" size="sm">
                            <span> Locations</span>
                        </Button>{' '}
                    
                    
                    
                    
                    
                    </Link>

                    <Switch>
                        <Route exact path="/"></Route>
                        <Route path="/Films" component={Films}></Route>
                        <Route path="/People" component={People}></Route>
                        <Route path="/Locations" component={Locations}></Route>

                    </Switch>
                </Fragment>
            </Router>


        );

    }


}


export default App;
