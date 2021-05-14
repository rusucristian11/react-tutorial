import React from 'react';

const userOutput = (props) => {
    return(
        <div className="userOutput">
            <p>Your username is : {props.userName}</p>
            <p>This is another paragraph.</p>
        </div>
    )
};

export default userOutput;