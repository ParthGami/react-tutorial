import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import styled from 'styled-components'
import withClass from '../hoc/withClass'
//import person from './Person/Person';
import Aux from '../hoc/Auxilliary'

const StyledButton = styled.button`
    
background-color : ${props => props.alt ? 'red':'green'};
color : white;
font : inherit;
border : 1px solid blue;
padding : 8px;
cursor : pointer;

&:hover {
  background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
  color : black
}
`

class App extends Component {
  state = {
    Persons : [
      {id : 1, name : "Parth" ,age : 24},
      {id : 2, name : "Vatsal", age : 22}
    ],
    Showelements : false,
    ShowCockpit : true
  }

  switchNameHandler = (newName) => {
    //console.log("Button is clicked.")
    this.setState( {
      Persons : [
        {name : newName ,age : 24},
        {name : "Vatsal Gami", age : 20}
      ]
    })
  }

  changeNameHandler = (event,id) => {
    let personIndex = this.state.Persons.findIndex(p => p.id===id)
    let person = {
      ...this.state.Persons[personIndex]
    }  
    person.name = event.target.value
    let persons = [...this.state.Persons]
    persons[personIndex] = person
    this.setState( {
      Persons : persons
    })
  }

  toggleContentHandler = () => {
      let showContent = this.state.Showelements
      this.setState({Showelements : !showContent})
  }

  DeletePersonHandler = (personIndex) => {
    //let persons = this.state.Persons.slice()
    let persons = [...this.state.Persons]
    persons.splice(personIndex,1)
    this.setState({
      Persons : persons
    })
  }

  render() {

    let btnClass = [classes.Button]

    let persons = null
    if(this.state.Showelements){
      persons = (
          <div> 
            <Persons 
              persons = {this.state.Persons}
              Deleted = {this.DeletePersonHandler}
              changeName = {this.changeNameHandler}/>  
          </div>
      )
      btnClass.push(classes.Red)
    }

   

    return (
        <Aux>
          <button onClick={() => {this.setState({ShowCockpit : false})}}>Cockpit</button>
          {this.state.ShowCockpit ? <Cockpit 
          pageTitle = {this.props.title}
          toggled = {this.toggleContentHandler}
          Showelements = {this.state.Showelements}
          Persons = {this.state.Persons}/> : null }
          {persons}
        </Aux>
    );
    //return React.createElement('div',null,React.createElement('h1',null,'This is Inside Return.'))
  }
}

export default withClass(App,classes.App);
