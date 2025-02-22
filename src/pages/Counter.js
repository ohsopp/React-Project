
import React, { useState } from 'react';

const Counter = () => {

    let [num, setNumber] = useState(0);

    return (
        <div>
            <button onClick={()=>setNumber(num + 1)}>+1</button>
            <button onClick={()=>setNumber(num - 1)}>-1</button>
            <p>{ num }</p>
        </div>
    )
}

export default Counter;