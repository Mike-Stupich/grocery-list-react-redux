import { Action } from 'redux'

interface ItemAction extends Action {
    id: number,
    text: string
}

interface Item {
    id: number,
    name: string
}

interface ItemState {
    items: Item[]
}

const itemReducer = (state: ItemState, action: ItemAction): ItemState => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        name: action.text
                    }
                ]
            }
        case 'REMOVE_ITEM':
            return {
            ...state,
            items: state.items.filter(item => item.id !== action.id)
        }
        default:
            return state
    }
}

export default itemReducer
