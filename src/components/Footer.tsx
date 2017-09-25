import * as React from 'react';
import { Link } from 'react-router-dom'
import {
    Container,
    Grid,
    Header,
    List,
    Menu,
    Segment
} from 'semantic-ui-react'

class Footer extends React.Component {
    public render() {
        return (
            <Segment
                inverted={true}
                textAlign='center'
                style={{ padding: '1em 0em' }}
            >
                <Container>
                    <Grid
                        divided={true}
                        inverted={true}
                        stackable={true}
                    >
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Header
                                inverted={true}
                                as='h4'
                                content='Footer'
                            />
                            <List
                                inverted={true}
                            >
                                <List.Item>This is the footer</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header
                                inverted={true}
                                as='h4'
                                content='What is this?'
                            />
                            <List
                                inverted={true}
                            >
                                <List.Item>This is a simple project to help with learning React-Redux</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

export default Footer