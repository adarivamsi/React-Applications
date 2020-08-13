import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor() {
        super()

        this.state = {
            title:'My React App'
        }
    }

    render(){
        return (
            <header>
                <div className="logo">
                    {this.state.title}
                </div>
                <center>
                    <input type="text"/>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;