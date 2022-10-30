import React from "react";
import uuid from 'react-uuid';

import { useContext, useState } from "react";
import { Reducer } from "./reducerComp/reducer";

const TaskList = () => {
    
    const {state, dispatch} = useContext(Reducer);

    const [tasks, setTasks] = useState([]);

    const tasksElem = tasks.map(task => {
        return <li key={task.id} onClick={() => task.selected = !task.selected}>{task.title}</li>
    })

    const addBtnHundler = () => {
        setTasks([...tasks, {id: uuid(), title: 'Новая задача', description: '', status: 'waiting', complited: false, selected: false}])
        dispatch({type: 'SET_COUNT'})
    }

    const deleteBtnHundler = () => {
        let newTasks = [];
        tasks.forEach(task => !task.selected ? newTasks.push(task) : task)
        setTasks([...newTasks])
    }
    return <div className="TaskList">
        <ul className="Tasks">
            {tasksElem}
        </ul>
        <div className="Tasks_service">
            <button className="Tasks_create" onClick={addBtnHundler}>Добавить задачу</button>
            <button className="Tasks_delete" onClick={deleteBtnHundler}>Удалить задачу</button>
        </div>
    </div>
}
export default TaskList;