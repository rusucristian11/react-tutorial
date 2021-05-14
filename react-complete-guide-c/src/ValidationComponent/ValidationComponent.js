import React from 'react';

const ValidationComponent = (props) => {
    const textLength = props.input.length
    if(textLength >= 5) return ( <p>Text long enough</p>)
    else return ( <p>Text too short</p> )
}

export default ValidationComponent;