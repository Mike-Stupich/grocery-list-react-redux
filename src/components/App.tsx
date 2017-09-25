import createBrowserHistory from 'history/createBrowserHistory'
import * as React  from 'react'
import { Route, Router } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GroceryList from '../containers/GroceryList'

import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
    public render () {
        return ( 
            <div>
                <Router history={createBrowserHistory()}>
                    <div>
                        <Header />
                        <GroceryList />
                        <Footer />
                    </div>
                </Router>
            </div>

        )
    }
}

export default App