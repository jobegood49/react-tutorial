import React, { Component } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faHeart,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons'

class Counter extends Component {
  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
class TaskForm extends React.Component {
  state = {
    inputValue: '',
  }
  addTask = event => {
    event.preventDefault()
    this.props.addTask(this.state.inputValue)
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    return (
      <div className="form-search-container">
        <div className="form-search">
          <form onSubmit={this.addTask} className="task">
            <input
              type="text"
              placeholder="add a task"
              onChange={this.handleChange}
              className="input-text"
            />
            <input className="input-submit" type="submit" value="Add" />
          </form>
        </div>
      </div>
    )
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => {
          return (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              deleteTask={this.props.deleteTask}
            />
          )
        })}
      </div>
    )
  }
}

const NavBar = props => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
        <div>
          <h1>Todo</h1>
        </div>
        <div class="icon-nav">
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <FontAwesomeIcon icon={faPlusSquare} />
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}

class Task extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.deleteTask(this.props.key)} */}
        <p>{this.props.text}</p>
        <button
          onClick={() => {
            // console.log('delete is called', this.props.id)
            // console.log(this.props.deleteTask)
            this.props.deleteTask(this.props.id)
          }}
        >
          Delete
        </button>
      </div>
    )
  }
}
class App extends Component {
  state = {
    nextId: 4,
    tasks: [
      {
        id: 1,
        text: 'Learn HTLM',
      },
      {
        id: 2,
        text: 'Learn React',
      },
      {
        id: 3,
        text: 'Learn Vue',
      },
    ],
  }

  addTask = value => {
    let newTask = {
      id: this.state.nextId,
      text: value,
    }

    this.setState({ nextId: this.state.nextId + 1 })

    this.setState({
      tasks: [...this.state.tasks, newTask],
    })
  }

  deleteTask = id => {
    console.log(id)
    let filteredTasks = this.state.tasks.filter(task => {
      return task.id !== id
    })

    this.setState({
      tasks: filteredTasks,
    })
  }

  render() {
    return (
      <div>
        {/* <Counter /> */}
        <NavBar />
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    )
  }
}

export default App
