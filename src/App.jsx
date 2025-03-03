import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './assets/Header'
import Footer from './assets/Footer'
import Food from './assets/Food'
import Card from './assets/Card'
import Button from './Button/Button'
import Student from './assets/Student'
import UserGreeting from './assets/UserGreeting'
import Button2 from './assets/Button2'

import MyComponent from './assets/MyComponent'

import List from './assets/List'
import List2 from './assets/list2'
import ColorPicker from './assets/ColorPicker'
import MyCar from './assets/MyCar'
function App() {


  const fruits = [{ id: "1", name: "apple", color: "red", cal: "95" },
  { id: "2", name: "orange", color: "orange", cal: "45" },
  { id: "3", name: "banana", color: "yellow", cal: "35" },
  { id: "4", name: "coconut", color: "chịu", cal: "75" },
  { id: "5", name: "pineapple", color: "chịu nốt", cal: "55" }]


  const vegetables = [{ id: "6", name: "apple", color: "red", cal: "95" },
  { id: "7", name: "orange", color: "orange", cal: "45" },
  { id: "8", name: "banana", color: "yellow", cal: "35" },
  { id: "9", name: "coconut", color: "chịu", cal: "75" },
  { id: "10", name: "pineapple", color: "chịu nốt", cal: "55" }]




  return (
    <>
      {/*
     <Header></Header>
    <Footer></Footer>
    <Food></Food>
    <Card></Card>
    <Button></Button>
    <Student name="LeeWing" age={30}></Student>
    <UserGreeting isLoggedIn={true} username="Hello Bro" />
    <UserGreeting isLoggedIn={false} username="Hello Bro" /> 
    <List></List>
    <List2 iteam={fruits} category="fruits" />
    <List2 iteam={vegetables} category="vegetables" />
    <Button2></Button2>
    <MyComponent/>
    <ColorPicker/>
    */}
      <MyCar></MyCar>




    </>


  )


}

export default App
