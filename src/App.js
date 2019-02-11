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
          return <Task key={task.id} text={task.text} />
        })}
      </div>
    )
  }
}

class Task extends React.Component {
  render() {
    return <div>{this.props.text}</div>
  }
}
class App extends Component {
  state = {
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
    console.log('add task')
    let newTask = {
      id: 4,
      text: value,
    }

    this.setState({
      tasks: [...this.state.tasks, newTask],
    })
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
