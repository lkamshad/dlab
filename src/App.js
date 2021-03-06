import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommonPeriods from './commonPeriods';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://yt3.ggpht.com/-P5IDP8hegLs/AAAAAAAAAAI/AAAAAAAAAAA/ycziqsJrZZM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" className="App-logo" />
          <h2>Welcome to D-Lab</h2>
        </div>
        <AddSchedules/>
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
    Profile: {
      name: '',
      freePeriods: '',
    },
    text: '',
    myName: '',
  }

  addFree = (pidx, didx, isChecked) => {
    let frees = [...this.state.myFrees]
     let x = this.state.array[didx][pidx]
    if (isChecked){
           frees.push(x)
        this.setState({
          myFrees: frees,
        })
    }else if (!isChecked){
      let newfrees = frees.filter ((i) => {
        return i!==x
      })
      this.setState({
        myFrees: newfrees,
      })

    }
  }

  setSchedule = () => {
    let me = {
      name: this.state.myName,
      freePeriods: this.state.myFrees,
    }
    this.setState({
      Profile: me,
    })
  }

takeText = (evt) =>{
  this.setState({
    text: evt.target.value
  })
} 

submit = () => {
  this.setState({
    myName: this.state.text,
  })
}

  render() {
    let boxes = this.state.array.map((day, didx) =>{
        return (
          <div> 
            {
              day.map((period,pidx) =>{
                const addFree = (evt) => {
                 const isChecked = evt.target.checked;
                  this.addFree(pidx, didx, isChecked)
                }
                return <span> <input type="checkbox" className="boxes" onChange={addFree}/> </span>
              })
            }
          </div>
        )
      })

    let daysList = this.state.basicarray.map((i) => {
      return <span className="day-names"> {i} </span>
    })
    return(
      
        <div className= "main">
        <h4> Enter your name </h4>
        <input onChange={this.takeText}/> 
        <button onClick={this.submit}> Submit</button>
        <h4> Select the periods you have free:</h4>
        {daysList}
        <div className="allboxes">
        {boxes}
        </div>
        {this.state.myName}

        <p> My free periods are:
        {this.state.myFrees}
        <br/>
      <button onClick={this.setSchedule}> Set my schedule</button>

      <CheckSchedules me = {this.state.Profile}/>
      </p>
      </div>
    );
  }
}

class CheckSchedules extends Component {
  constructor(props){
    super(props);
    this.state = {
      // me: {
      //   name: "Kara",
      //   freePeriods: ["m3", "m7", "t1", "w4", "th2", "th6"],
      // },
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
  let mySchedule = this.props.me;
  let friendSchedule = this.state.otherStudents;
  let common=[];
    if (this.state.personCompare==="noPerson"){
      common=[]
    }

    else{
      for (let i = 0; i < mySchedule.freePeriods.length; i++) { 
        for (let j = 0; j < friendSchedule[this.state.personCompare].freePeriods.length; j++) { 
          if (mySchedule.freePeriods[i]===friendSchedule[this.state.personCompare].freePeriods[j]){
            common.push(mySchedule.freePeriods[i]);
          }
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
          <option value="noPerson"> Choose a person... </option>
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
