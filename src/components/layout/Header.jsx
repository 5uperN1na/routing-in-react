import React from 'react'
import logo from './logo.png';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <header style={headerStyle}>
            <p align="right">
                <img src={logo} className="App-logo" alt="logo" />
            </p>


    
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




















          


        </header>

    )
}


let headerStyle = {
    background: '#FFC300',
    color: 'black',
    padding: '5px',
    margin: '10px'

}

export default Header;