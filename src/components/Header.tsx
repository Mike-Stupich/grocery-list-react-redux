import * as React from 'react';
import { Link } from 'react-router-dom'
import {
    Container,
    Menu,
    Segment
} from 'semantic-ui-react'

class Header extends React.Component {
    public render() {
        return (
            <Segment
                inverted={true}
                textAlign='center'
                style={{minHeight:50, padding: '1em 0em' }}
                vertical={true}
            >
                <Container>
                    <Menu 
                        inverted={true}
                        pointing={true}
                        secondary={true}
                        size='large'
                    >
                        <Menu.Item as={Link} to='/'>
                            <Menu.Item>Grocery List</Menu.Item>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item as={Link} to='https://github.com/Mike-Stupich/grocery-list-react-redux'>
                                <Menu.Item>Source Code</Menu.Item>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Segment>
        )
    }
}

export default Header;
