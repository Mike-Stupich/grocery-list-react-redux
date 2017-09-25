import PropTypes from 'prop-types'
import * as React from 'react';
import {
    Container,
    Header,
    Menu,
    Segment
} from 'semantic-ui-react'

import GroceryItem from '../components/GroceryItem'

class GroceryList extends React.Component {
    public render() {
        return (
            <Segment>
                <Container>
                    <Header
                        content='Grocery List'
                        size='large'
                        textAlign='center'
                    />
                </Container>
            </Segment>
        )
    }
}

export default GroceryList
