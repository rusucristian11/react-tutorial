import React from 'react';

const CharComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign:'center',
        margin: '16px',
        border: '1px solid black'
    }
    console.log(props)
    return(
        <p style={style} onClick={() => props.onDelete(props.id)}>{props.displayedChar}</p>
    )
}

export default CharComponent;