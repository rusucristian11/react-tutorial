import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Auxiliary from '../components/hoc/Auxiliary';

class App extends Component {

    constructor(props)
    {
        super(props);
        console.log('[App.js] constructor');
    }

  state = {
    persons: [
      { id:'1' ,name:'Max', age:28 },
      { id:'2' ,name:'Cris', age:22 },
      { id:'3' ,name:'Oscar', age:22 }
    ],
    otherState: 'some other value',
    showPersons: false,
    inputData: '',
      showCockpit: true
  };

   static getDerivedStateFromProps(props, state) {
       console.log('[App.js] getDerivedStateFromProps', props);
       return state;
   }

   //componentWillMount() {
       //console.log('[App.js] componentWillMount');
   //}

   componentDidMount() {
       console.log('[App.js] componentDidMount');
   }

   shouldComponentUpdate() {
       console.log('[App.js] shouldComponentUpdate');
       return true;
   }

    componentDidUpdate() {
       console.log('[App.js] componentDidUpdate')
   }

   nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Objec.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
   }

   deletePersonHandler(personIndex) {
     // const persons = this.state.persons.slice();
     const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
   }

   togglePersonsHandler() {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
   }

  //  changeInputData(event) {
  //    this.setState({inputData: event.target.value});
  //  }

  //  deleteChar = (idChar) => {
  //     const strNew = this.state.inputData.substring(0,idChar-1) + this.state.inputData.substring(idChar, this.state.inputData.length);
  //     this.setState({inputData: strNew});
  //  }

  render(){
       console.log('[App.js] render');
    let persons = null;
    if(this.state.showPersons) {
      persons = (
            <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler.bind(this)}
            changed={this.nameChangedHandler.bind(this)} />
      );
    }

    // let char = null;
    // if(this.state.inputData) {
    //   char = [];
    //   for(let i=0;i< this.state.inputData.length;i++)
    //   {
    //     char.push(<CharComponent id={i+1} displayedChar={this.state.inputData[i]} onDelete={this.deleteChar}></CharComponent>)
    //   }
    // }
    return (
        <Auxiliary>
            <button
                onClick={ () => {
                    this.setState({showCockpit: false});
                }}> Remove Cockpit
            </button>
            {this.state.showCockpit ? (
                <Cockpit
                    title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler.bind(this)}
                />
                ): null}
                {persons}
        {/* <input type="text" onChange={(event) => this.changeInputData(event)} value={this.state.inputData}></input>
        <p>{this.state.inputData.length}</p> */}
        {/* <ValidationComponent input={this.state.inputData}></ValidationComponent> */}
        {/* {char} */}
      </Auxiliary>
    )
  }
}

export default withClass(App, classes.App);

