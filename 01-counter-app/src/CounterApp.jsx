import PropTypes from 'prop-types'
import { useState } from 'react'
 
export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { setCounter(counter + 1); }
    const handleRemove = () => { setCounter(counter - 1); }
    const handleReset = () => { setCounter(value); }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleRemove }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleReset }> reset </button>
        </>
    )
}

CounterApp.proptypes = {
    value: PropTypes.number.isRequired
}