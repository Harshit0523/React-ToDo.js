// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
// import {Footer} from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";

import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("i m delete of todo", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringfy(todos));
  }
  let sno;
  const addTodo = (title, desc) => {
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);

  }


  const [todos, setTodos] = useState([initTodo]);


  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Header title="My Todos toiList" />
      <AddTodo addtodo={addTodo} />
      <Todos todos={todos} ondelete={ondelete} />
      {/* <Footer/> */}
    </>

  );
}

export default App;
