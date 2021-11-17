import React from 'react'
import { BrowserRouter, Switch} from 'react-router-dom'

const UserPortal = () => {
    return <BrowserRouter>
        <Switch>
            {/* <Route exact path='/user/profile' component={Profile}/>
            <Route exact path='/user/library' component={Library}/>
            <Route exact path='/user/home' component={UserHome}/> */}
        </Switch>
    </BrowserRouter>
}

export default UserPortal
