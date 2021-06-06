import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import Page from './Components/Table/Table'

import { ThemeProvider, createMuiTheme } from '@material-ui/core'
// import {  } from '@material-ui/icons'
// import {  } from '@material-ui/styles'

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d32f2f',
        },
    }
})

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Page} />
                        <Route path="/Edit" component={Form} />
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    )
}

export default App