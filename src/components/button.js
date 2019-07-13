import React from 'react';
import { useState } from 'react';
import './button.css'

function Button(props) {
    const [count, setCount] = useState({
        toggle: false,
        deltaX: 0,
        deltaY: 0,
    });
    let textInput = React.createRef();
    const x = function (event) {
        let { x, y } = textInput.current.getBoundingClientRect()
        let { clientX, clientY } = event
        let deltaX = clientX - x - 5
        let deltaY = clientY - y - 5

        setCount({
            toggle: true,
            deltaX: deltaX,
            deltaY: deltaY
        })
    }
    const y = function () {
        setCount({
            toggle: false
        })
    }
    return (
        <button ref={textInput} className='button2' onClick={x}> <span className='value'>{props.value}</span>
            {count.toggle === true ? <span className='circle' onAnimationEnd={y}
                style={{ left: count.deltaX, top: count.deltaY }}
            ></span> : ''}
        </ button>
    );
}


export default Button;
