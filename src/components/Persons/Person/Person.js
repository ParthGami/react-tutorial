import React,{Component}from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/Auxilliary'
import styled from 'styled-components'
import withClass from '../../../hoc/withClass'
class Person extends Component{
    
    render(){
        // const StyledDiv = styled.div`
        // width : 60%;
        // margin : 16px auto;
        // border : 1px solid #eee;
        // box-shadow: 0 2px 3px #ccc;
        // padding: 16px;
        // text-align: center;
    
        // @media (min-width : 500px){
        //     width : 450px
        // }
    
        // `
        console.log('[Person.js] rendering....')
    
        return (
        <Aux>
            <p>I am {this.props.name} and My age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.change} value={this.props.name}/>
            <button onClick={this.props.Delete}>Delete</button>
        </Aux>
        )
    }
   
}

export default withClass(Person,classes.Person)