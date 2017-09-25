import * as React  from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GroceryList from '../containers/GroceryList'


class App extends React.Component {
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