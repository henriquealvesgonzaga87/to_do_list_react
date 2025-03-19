import React, {Component} from "react";

// Form
import { FaPlus } from "react-icons/fa";

// Tasks
import { FaEdit, FaWindowClose } from "react-icons/fa";

import './Main.css'


export default class Main extends Component {
  state = {
    newtask: '',
    tasks: [
      'make coffee',
      'drink water',
      'study'
    ]
  };

  handleChange = (e) => {
    this.setState({
      newtask: e.target.value,
    });
  }

  render() {
    const {newtask, tasks} = this.state;

    return (
      <div className="main">
        <h1>To do List</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newtask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit"/>
                <FaWindowClose className="delete"/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
