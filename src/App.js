import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { useDelay } from './hooks'
import Start from './components/Start'
import GuestPortal from './portals/GuestPortal'
import UserPortal from './portals/UserPortal'
import Footer from './footer'
import './fonts/fonts.css';
import './App.css'
const App = () => {
   const delay = useDelay(4000)
    if (delay) {
        return <Start/>
    }
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={GuestPortal}/>
        <Route path='/user' component={UserPortal}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}
export default App