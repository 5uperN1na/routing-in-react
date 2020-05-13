import React from 'react'
import logo from './logo-sm.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <header style={headerStyle}>
            <p align="center">
                <img src={logo} className="App-logo" alt="logo" />


                <div>{' '}</div>
                <div>{' '}</div>
                <div>{' '}</div>

                <Link to="/">
                    {' '}
                    <Button variant="secondary" size="sm">
                        <span > Home</span>
                    </Button>{' '}

                </Link>

                <Link to="/Films">
                    <Button variant="dark" size="sm">
                        <span> Films</span>
                    </Button>{' '}

                </Link>

                <Link to="/People">

                    <Button variant="dark" size="sm">
                        <span> People</span>
                    </Button>{' '}

                </Link>

                <Link to="/Locations">
                    <Button variant="dark" size="sm">
                        <span> Locations</span>
                    </Button>{' '}

                </Link>

            </p>

        </header>

    )
}


let headerStyle = {
    background: '	#bdb298',
    color: 'black',
    padding: '1px',
    margin: '1px'

}

export default Header;