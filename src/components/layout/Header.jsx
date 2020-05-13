import React from 'react'
import logo from './logo-sm.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <header style={headerStyle}>
            <p align="center">
                <img src={logo} className="App-logo" alt="logo" />
            </p>

            <div class="d-flex flex-row justify-content-center align-items-center bd-highlight mb-3">

                {/* home button */}
                <div class="p-2 bd-highlight">
                    <Link to="/">
                        <Button variant="secondary" size="sm">Home</Button>
                    </Link >
                </div>

                {/* Films button */}

                <div class="p-2 bd-highlight">
                    <Link to="/Films">
                        <Button variant="dark" size="sm">Films</Button>
                    </Link>
                </div>


                {/* People button */}

                <div class="p-2 bd-highlight">
                    <Link to="/People">
                        <Button variant="dark" size="sm">People</Button>
                    </Link>
                </div>



                {/* Locations button */}

                <div class="p-2 bd-highlight">
                    <Link to="/Locations">
                        <Button variant="dark" size="sm">Locations</Button>
                    </Link>
                </div>


            </div>
{/* 

            <div className="d-flex justify-content-center align-items-center">
                < Link to="/" >
                    <Button variant="secondary" size="sm">Home</Button>
                </Link >
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <Link to="/Films">
                    <Button variant="dark" size="sm">Films</Button>
                </Link>
            </div>


            <div className="d-flex justify-content-center align-items-center">
                <Link to="/People">
                    <Button variant="dark" size="sm">People</Button>
                </Link>
            </div>



            <div className="d-flex justify-content-center align-items-center">
                <Link to="/Locations">
                    <Button variant="dark" size="sm">Locations</Button>

                </Link>
            </div> */}


        </header >



    )






















}


let headerStyle = {
    background: '	#bdb298',
    color: 'black',
    padding: '1px',
    margin: '1px'

}

export default Header;