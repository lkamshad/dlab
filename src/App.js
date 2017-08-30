import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommonPeriods from './commonPeriods';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddSchedules />
        <CheckSchedules />
      </div>
    )
  }
}

class AddSchedules extends Component {
  state ={
    basicarray: ['M', 'T', 'W', 'R', 'F'],
    array: [[1,2,3,4,5,],[6,7,8,9,10,],[11,12,13,14,15.],[16,17,18,19,20,],[21,22,23,24,25,],[26,27,28,29,30,],[31,32,33,34,35],],
    myFrees: [],
    newFree: '',
  }

  addFree = (idx) => {
     let frees = [...this.state.myFrees]
     let x = this.state.basicarray[idx]
     frees.push(x)

        this.setState({
          myFrees: frees,
        })
  }
  render() {
    let boxes = this.state.basicarray.map((i, idx) =>{
      const addFree = () => {
          this.addFree(idx)
        }
        return <span className="allboxes"> <input type="checkbox" className="boxes" onClick={addFree}/> {i}</span>
      })
    return(
      
        <div>
        {boxes}
      <p> My free periods are:
      {this.state.myFrees}
      </p>
      </div>
    );
  }
}

class CheckSchedules extends Component {
  constructor(props){
    super(props);
    this.state = {
      me: {
        name: "Kara",
        freePeriods: ["m3", "m7", "t1", "w4", "th2", "th6"],
      },
      otherStudents: [
      {
        name: "Leyla",
        freePeriods: ["m3", "m7", "t3", "t6", "w4", "th2", "th7"],
      },
      {
        name: "Abby",
        freePeriods: ["m6", "t1", "t7", "w3", "th2"]
      },
      ],
      commonPeriods: [],
      personCompare: 0,
    }
  }

pickPerson = (evt) => {
  this.setState({
    personCompare: evt.target.value,
  });
}

compare = () => {
  let mySchedule = this.state.me;
  let friendSchedule = this.state.otherStudents;
  let common=[];
     for (let i = 0; i < mySchedule.freePeriods.length; i++) { 
        for (let j = 0; j < friendSchedule[this.state.personCompare].freePeriods.length; j++) { 
          if (mySchedule.freePeriods[i]===friendSchedule[this.state.personCompare].freePeriods[j]){
            common.push(mySchedule.freePeriods[i]);
          }
        }
     }
  this.setState({
    commonPeriods: common,
  })

}

  render(){
    let periods = this.state.commonPeriods.map((period) => {
      return <div> {period} </div>
    })

    let dropdown = this.state.otherStudents.map((person, idx) => {
      return <option value={idx}>{person.name}</option>
    })
    console.log(dropdown)
    return(
      <div className="compare-area">
        <select onChange={this.pickPerson}>
          <option> Choose a person... </option>
          {dropdown} 
        </select>
        <button type="button" className="compare-button" onClick={this.compare}>Compare Schedules</button>
        <div> Your Common Periods: </div>
        <CommonPeriods periods={periods}/>  
      </div>
      );
  }
}
export default App;
