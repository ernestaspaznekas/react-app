import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">{this.props.children}</h1>
                </header>
            </div>
        );
    }
}

export default Header;