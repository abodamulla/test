import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import LastPage from './Components/Table/LastTable'

// import {} from '@material-ui/core'
// import {} from '@material-ui/icons'
// import {} from '@material-ui/styles'

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/"     component={LastPage} />
                    <Route       path="/Edit" component={Form} />
                </Switch>
            </Router>
        </div>
    )
}

export default App