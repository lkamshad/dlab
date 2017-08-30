import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to D-Lab</h2>
        </div>
        <AddSchedules />
        <CheckSchedules />
      </div>
    )
  }
}

class AddSchedules extends Component {
  state ={
    basicarray: ['M', 'T', 'W', 'Th', 'F'],
    array: [['m1','t1','w1','th1','f1',],['m2','t2','w2','th2','f2',],['m3','t3','w3','th3','f3',],['m4','t4','w4','th4','f4',],['m5','t5','w5','th5','f5',], ['m6','t6','w6','th6','f6',],['m7','t7','w7','th7','f7',],],
    myFrees: [],
    newFree: '',
  }

  addFree = (pidx, didx) => {
     let frees = [...this.state.myFrees]
     let x = this.state.array[didx][pidx]
     frees.push(x)

        this.setState({
          myFrees: frees,
        })
  }

  render() {
    let boxes = this.state.array.map((day, didx) =>{
        return (
          <div> 
            {
              day.map((period,pidx) =>{
                const addFree = () => {
                  this.addFree(pidx, didx)
                }
                return <span className="allboxes"> <input type="checkbox" className="boxes" onChange={addFree}/> </span>
              })
            }
          </div>
        )
      })

    let daysList = this.state.basicarray.map((i) => {
      return <span className="day-names"> {i} </span>
    })
    return(
      
        <div>
        <h4> Select the periods you have free:</h4>
        {daysList}
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
