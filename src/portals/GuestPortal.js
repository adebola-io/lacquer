import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Landing from '../pages/Home (Guest)/Landing'

const GuestPortal = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/home' component={Landing}/>
            </Switch>
        </BrowserRouter>
    )
}

export default GuestPortal
