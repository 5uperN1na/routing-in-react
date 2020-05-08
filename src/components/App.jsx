import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Films from './Films';
import People from './People';
import Locations from './Locations';
import Home from './Home';
import FilmDetails from './FilmDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
               

                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/Films" component={Films}></Route>
                        <Route exact path="/Films/:filmid" component={FilmDetails} />
                        <Route exact path="/People" component={People}></Route>
                        <Route exact path="/Locations" component={Locations}></Route>
                        <Route path="*" component={() => <h1 className="mt-5 text-center">404 Page</h1>} />
                    </Switch>

 





                </Fragment>
            </Router>


        );

    }


}


export default App;
