import React from 'react';
import './App.css';
import ToDoList from "./components/ToDoList";

export type tasksType = Array<taskType>

type taskType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {



    const tasks1: tasksType = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false}
    ]

    const tasks2: tasksType = [
        {id: 2, title: 'Master of puppets', isDone: true},
        {id: 2, title: 'Shape of you', isDone: false},
        {id: 2, title: 'Peace sells', isDone: true},
    ]
    return (
        <div className="App">
            <ToDoList title={'ToDoList'} tasks={tasks1}/>
            <ToDoList title={'Songs'} tasks={tasks2}/>
        </div>
    );
}

export default App;