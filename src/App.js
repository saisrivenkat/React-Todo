import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './Components/Home'

function App() {
  const [search, setsearch] = useState('')
  const [todo, settodo] = useState([])
  const [dropown, setdropdown] = useState('notcompleted')
  useEffect(() => {
    getlocalstorage()
  }, [])
  useEffect(() => {
    savelocalstorage()
  }, [todo])

  const submit = (e) => {
    e.preventDefault()
    settodo([
      ...todo, { title: search, completed: false, id: Math.random(), date: new Date().toDateString() }
    ])
    setsearch('')
  }
  const change = (id) => {
    const index = todo.findIndex((todo) => { return todo.id === id })
    const todoid = { ...todo[index] }
    todoid.completed = true
    const alltodo = [...todo]
    alltodo[index] = todoid
    settodo(alltodo)
  }

  const dropdownchange = (e) => {
    setdropdown(e.target.value)
  }
  const deletetodo = (id) => {
    settodo(todo.filter(item => item.id !== id))
  }
  const savelocalstorage = () => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }
  const getlocalstorage = () => {
    if (localStorage.getItem('todo') === null) {
      localStorage.setItem('todo', JSON.stringify([]));
    }
    else {
      let localcart = JSON.parse(localStorage.getItem('todo'))
      settodo(localcart)
    }
  }
  return (
    <div className="App">
      <Home
        setsearch={setsearch}
        dropdownchange={dropdownchange}
        setdropdown={setdropdown}
        dropdown={dropown}
        search={search}
        todo={todo}
        submit={submit}
        deletetodo={deletetodo}
        change={change} />
    </div>
  );
}

export default App;
