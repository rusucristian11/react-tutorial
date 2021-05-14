import React, { useEffect } from 'react';
import classes from "./Cockpit.css";


const Cockpit = ( props ) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout( () => {
            alert('Saved data to Cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.personsLength <=2) {
        assignedClasses.push(classes.red);  // classes = ['red']
    }

    if(props.personsLength <= 1){
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This works!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);