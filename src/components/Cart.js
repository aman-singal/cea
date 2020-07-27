import React , {useReducer} from 'react'
import CartIndividual from './CartIndividual'
import AppBar from './AppBar'

function Cart() {
    const reducer = (state,action) =>{
        switch(action.type){
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <div style={{marginBottom: '70px'}}>
            <AppBar state={state} />
            </div>
            <CartIndividual text="Iphone 7" dispatch={dispatch} />
            <CartIndividual text="Iphone 9" dispatch={dispatch} />
            <CartIndividual text="Iphone X" dispatch={dispatch} />
            <CartIndividual text="Iphone XL" dispatch={dispatch} />
        </div>
    )
}

export default Cart
