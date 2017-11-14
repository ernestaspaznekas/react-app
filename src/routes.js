import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'

import Title from './components/Title'

const style = {
    div: {
        display: 'flex',
        position: 'center'
    },
    link: {
        marginRight: '20px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}

const Routes = () => (
    <Router>
        <div style={style.container}>
            <Title >
                <div style={style.div}>
                    <div style={style.link}><Link to="/">Home</Link></div>
                    <div style={style.link}><Link to="/about">About</Link></div>
                    <div style={style.link}><Link to="/topics">Topics</Link></div>
                </div>
            </Title>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)

export default Routes