import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import Page from './Components/Table/Table'

// import {} from '@material-ui/core'
// import {} from '@material-ui/icons'
// import {} from '@material-ui/styles'

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/"     component={Page} />
                    <Route       path="/Edit" component={Form} />
                </Switch>
            </Router>
        </div>
    )
}

export default App