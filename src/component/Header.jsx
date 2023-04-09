import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Employee Management App</a>
                </nav>
            </div>
        );
    }
}

export default Header;