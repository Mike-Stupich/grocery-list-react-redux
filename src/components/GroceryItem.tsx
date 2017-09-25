import propTypes from 'prop-types'
import * as React from 'react';

interface Props {
    onClick,
    
}

class GroceryItem extends React.Component<Props> {
    public render() {
        return (
            <li>
                GroceryItem
            </li>
        )
    }
}

export default GroceryItem
