import React, { Component } from 'react';
import { BrowserRouter as  Route} from "react-router-dom";
import './App.css';
import './Slide.css';


// const name = 'Divyashree';

const numbers = [1,2,3,4];

function Func1(props) {
  return (
    <div>
      <div>Hello, world</div>
      <div>Hello, {props.name}</div>
      <div>{props.id}</div>
    </div>
  );

}
function Func2(){

//  window.open("./Slide.js");
document.getElementById("id1").innerHTML="It's changed";
{/* <Route path="/slide.js" component={Slide} />  */}
window.open('www.google.com');
  

}
function func3(){
  document.getElementById("id2").innerHTML="not changed";
}


class Ex1 extends Component {

  render() {
    return (
      <div>
        <Func1 name="Divya" ></Func1>
        <Func1 name="Anu"></Func1>
        <h1>{Func1(<div name="Divyashree"></div>)}</h1>
        <h2 id = "id1">This is react</h2>
        <button onClick= {Func2}>Click me</button>
      </div>
    );
  }

}





export default Ex1;