import React, { Component } from 'react';
import Tasks from './Tasks';

class Task extends Component {
    render() {
        const { task } = this.props;

        return <div>
            { task.title } -
            { task.description } -
            { task.done }
            <input type="checkbox"></input>
            <button>x</button>
        </div>
    }
}

export default Task