import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {increase, decrease} from './CounterSlice'

function CounterFeature(props) {
   const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const handleIncreaseClick = () => {
        // const action = increase() // call action function
        return dispatch(increase())
    }
    const handleDecreaseClick = () => {
        const action = decrease() // call action function
        return dispatch(action)
    }
    
    return(
        <div>
            Số đếm: {counter}
            <br></br>
            <button onClick={handleIncreaseClick}>Tăng</button>
            <button onClick={handleDecreaseClick}>Giảm</button>
        </div>
    )
}
export default CounterFeature