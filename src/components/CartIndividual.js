import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Zero: {
      backgroundColor: 'yellow',
      width: '70px',
      color: 'black',
      fontWeight: 'bold',
      display: 'inline-block',
      textAlign: 'center',
        },
    nonZero:{
        backgroundColor: 'blue',
        width: '70px',
        color: 'white',
        fontWeight: 'bold',
        display: 'inline-block',
        textAlign: 'center'
    }
    })
)

function CartNumber({text , dispatch}) {

    const classes = useStyles();
    const [amount,setAmount] = useState(0)
    const handleIncrement = () =>{
        setAmount(prevState =>{
            return prevState + 1
        })
        dispatch({type: "increment"})
    }

    const handleDecrement = () =>{
        if(amount){
            setAmount(prevState =>{
                return prevState - 1
            })
            dispatch({type: "decrement"})
        }
    }

    return (
        <div>
            <div style={{marginLeft: '150px' , marginBottom: '10px' , marginTop: '50px'}}>
                {text}
            </div>
            <span className={amount ? classes.nonZero : classes.Zero}>
                {!amount? 'Zero' : amount}
            </span>
            <Button variant="contained" onClick={handleIncrement} >Increment</Button>
            <Button variant="contained" color="secondary" onClick={handleDecrement}>Decrement</Button>
        </div>
    )
}

export default CartNumber
