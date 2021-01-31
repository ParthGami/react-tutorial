import React,{Component}from 'react'

import Person from './Person/Person'

class Persons extends Component{

    UNSAFE_componentWillMount(){
        console.log("[Person.js] componentWillMount.")
    }
    componentDidMount(){
        console.log("[Person.js] componentDidMount")
    }
    UNSAFE_componentWillReceiveProps(){
        console.log("[Person.js] componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("[persons.js] shouldComponentUpdate")
        if(nextProps.persons !== this.props.persons){
            return true
        }else{
            return false
        }
        
    }

    componentDidUpdate(){
        console.log("[Person.js] componentDidUpdate")
    }

    render(){

        console.log('[persons.js] rendering....')
        return(
            this.props.persons.map( (person,index) =>  <Person 
            name={person.name} 
            age = {person.age} 
            Delete = {() => this.props.Deleted(index)}
            key = {person.id}
            change = {(event) => this.props.changeName(event,person.id)}/>
)
        )
    }
}
export default Persons