import React from 'react';
import './BoxOne.css'

function App(props) {
    return (
        <div className='BoxOne'>
            <div> Box One {props.firstLine || 'Box 1'}</div>
        </div>
    );
}

export default App;
