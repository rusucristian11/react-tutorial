import React from 'react';


const userInput = (props) => {
    return(
        <input style={{background:'yellow'}} type="text" onChange={props.changed} value={props.userName}></input>
    )
};

export default userInput;