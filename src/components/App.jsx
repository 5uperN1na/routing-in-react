import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Link,  Switch, Route} from 'react-router-dom';
import Films from './Films';
import People from './People';
import Locations from './Locations';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to ="/">Home</Link>
                    <Link to ="/Films">Films</Link>
                    <Link to ="/People">People</Link>
                    <Link to ="/Locations">Locations</Link>

                    <Switch>
                        <Route exact path="/"></Route>
                        <Route path = "/Films" component = {Films}></Route>
                        <Route path = "/People" component = {People}></Route>
                        <Route path = "/Locations" component = {Locations}></Route>

                    </Switch>
                </Fragment>
            </Router>


        );

    }


}


export default App;
