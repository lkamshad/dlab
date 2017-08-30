import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      otherStudents: [{
        name: "Leyla",
        freePeriods: ["m3", "m7", "t3", "t6", "w4", "th2", "th7"],
      }],
      commonPeriods: [""]
    }
  }

compare = () => {
  let mySchedule = this.state.me;
  let friendSchedule = this.state.otherStudents;
  let common=[];
  // for (let i = 0; i < mySchedule.length; i++) { 
  //   for (let j = 0; j < friendSchedule.length; j++) { 
  console.log(mySchedule)
  console.log(friendSchedule)
  if (mySchedule.freePeriods[0]===friendSchedule[0].freePeriods[0]){
    common.push("hello");
    console.log("hello")
  }
  else{
    console.log("bye")
  }
    //   }
    // }
  this.setState({
    commonPeriods: common,
  })

}

  render(){
    return(
      <div className="compare-area">
        <button type="button" className="compare-button" onClick={this.compare}>Compare Schedules</button>
        <div>{this.state.commonPeriods}</div>
      </div>
      );
  }
}
export default App;
