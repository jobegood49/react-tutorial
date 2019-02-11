import React, { Component } from 'react'
import './App.css'

class TaskForm extends React.Component {
  render() {
    return (
      <div>
        <form className="task">
          <input type="text" placeholder="add a task" />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

class TaskList extends React.Component {
  constructor() {
    super()
    this.state = {
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
  }

  render() {
    return (
      <div>
        {this.state.tasks.map(task => {
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
  render() {
    return (
      <div>
        <TaskForm />
        <TaskList />
      </div>
    )
  }
}

export default App
