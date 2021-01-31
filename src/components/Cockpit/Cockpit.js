import React , { useEffect } from 'react'
import classes from './Cockpit.css'


const Cockpit = (props) => {
  
    let btnClass = [classes.Button]
    if(props.Showelements)
        btnClass.push(classes.Red)

    let assignedClasses = []

    if(props.Persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(props.Persons.length<=1){
      assignedClasses.push(classes.bold)
    }
    
    useEffect(() => {
      console.log("[Persons.js] useEffect")
    })
  
  
    return (
        <div>
          <h1>{props.pageTitle}</h1>
          <p className={assignedClasses.join(' ')}>This is really working.</p>
          <button 
            className={btnClass.join(' ')}
            onClick={props.toggled}>
            {!props.Showelements ? 'Show' : 'Hide'} Person
          </button> 
        </div>
    )
}

export default Cockpit