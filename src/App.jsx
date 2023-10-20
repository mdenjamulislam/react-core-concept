import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Counter from './Count'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {
  
  const actors = ['Abul', 'Rohim', 'Kamol', 'Jadu', 'Modhu'];

  const singers = [
    {id: 1, name: 'Solimullah', age: 43},
    {id: 2, name: 'Kalimullah', age: 32},
    {id: 3, name: 'Akubullah', age: 45}
  ];

  return (
    <>
      
      <h1>Vite + React</h1>
      <Users></Users>
      <Friends></Friends>






      {/* <Team></Team>

      <Counter></Counter> */}


















      {/* <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      <Singer singer={"name"}></Singer>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}



      {/* <Person /> */}
      {/* <Developer/> */}
      {/* <Device name="mobile" price="2000"></Device>
      <Device name="laptop" price="20000"></Device> */}
      {/* <Todo task="JS Learning"></Todo>
      <Todo task="React Learning" isDone={true}></Todo>
      <Todo task="React Learning" isDone={false}></Todo> */}
      
    </>
  )
}


function Device(props) {
  return (
    <h2>Device name {props.name} and Device Price {props.price}</h2>
  )
}


function Person () {
  const Name = 'Enjam';
  return <h2 className='heading'>My Name is {Name}</h2>
}

function Developer() {
  const developerStyle = {
    padding: '20px',
    border: '1px solid #ff2222',
    borderRadius: '20px'
  }
  return (
    <>
      <div style={developerStyle}>
        <img src="assets/developer.jpg" alt="" />
        <h2 className="heading">MD Enjamul Islam</h2>
      </div>
    </>
  )
}


export default App
