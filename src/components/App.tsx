import React, { Component, PropTypes } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GroceryList from '../containers/GroceryList'


class App extends Component {
    public render () {
        return ( 
            <div>
                <Header />
                <GroceryList />
                <Footer />
            </div>
        )
    }
}

export default App