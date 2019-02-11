import React, { Component } from 'react'
import './App.css'

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
      <div>
        <form onSubmit={this.addTask} className="task">
          <input
            type="text"
            placeholder="add a task"
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
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
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    )
  }
}

export default App
