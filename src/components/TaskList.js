import React, { useEffect } from "react";

import { useContext} from "react";
import { Reducer } from "./reducerComp/reducer";

export const TaskList = () => {
    
    const {state, dispatch} = useContext(Reducer);

    useEffect(() => {
        if (localStorage.getItem('tasks')) {
            JSON.parse(localStorage.getItem('tasks')).forEach(task => {
                dispatch({type: 'ADD_TASK', task: task})
                dispatch({type: 'SELECTED_TASK'})
            });
        }
    }, [])

    const tasksElem = state.tasks.map(task => {
        return <li key={task.id} onClick={(e) => {

            if (e.target.classList.contains('btn_remove')) {
                dispatch({type: 'DELETE_TASK', id: task.id})
                return
            }

            if (e.target.classList.contains('btn_complited')) {
                dispatch({type: 'SET_COMPLITE', id: task.id})
                return
            }

            if (e.target.classList.contains('btn_play')) {
                dispatch({type: 'SET_PLAY', id: task.id})
                console.log('hi')
                return
            }

            dispatch({type: 'SELECTED_TASK', id: task.id})
        }} className={task.complited ? 'complited' : task.play ? 'play' : task.selected ? 'selected' : ''}>
            <p>{task.title}</p>
            <div className="btns_container">
                <button className="btn_complited button"><i className="fa-solid fa-check"></i></button>
                <button className="btn_play button"><i className="fa-solid fa-play"></i></button>
                <button className="btn_remove button"><i className="fa-sharp fa-solid fa-trash"></i></button>
            </div>
        </li>
    })

    return <div className="TaskList">
        <div className="Tasks_service">
            <h3>Задачи:{state.tasks.length}</h3>
            <div>Выполнено:{state.tasks.filter(task => task.complited === true).length}</div>
            <span><i className="fa-solid fa-plus" onClick={() => {dispatch({type: 'ADD_TASK'})}}></i></span>
        </div>
        <ul className="Tasks">
            {tasksElem}
        </ul>
    </div>
}
