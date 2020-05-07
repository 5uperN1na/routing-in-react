import React from 'react'
import logo from './logo.png';

function Header() {
    return (
        <header style={headerStyle}>
            <p align="right">
                <img src={logo} className="App-logo" alt="logo" />
            </p>
          


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