import React from "react";
import initialState from "./initialState";
import ACTIONS from "./ACTIONS";
import uuid from 'react-uuid';

export const Reducer = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            let newTask;
            if (action.task) {
                newTask = {...action.task}
            } else {
                newTask = {id: uuid(), title: state.taskTitle, description: state.taskDescription, play: false, complited: false, selected: false}
            }
            return {
                ...state,
                tasksCount: state.tasksCount + 1,
                tasks: [...state.tasks, newTask],
            }
        case ACTIONS.DELETE_TASK:   
            return {
                    ...state,
                    tasksCount: state.tasksCount - 1,
                    tasks: state.tasks.filter(task => task.id !== action.id)
            }
        case ACTIONS.SELECTED_TASK:
            let tasksSelected = state.tasks.map(task => {
                task.id === action.id ? task.selected = !task.selected : task.selected = false
                return task
            });

            let selectedTask = tasksSelected.find(task => task.selected === true) || {};

            let description;
            let title;

            if (Object.keys(selectedTask).length) {
                title = selectedTask.title;
                description = selectedTask.description;
            } else {
                title = '';
                description = '';
            }
            return {
                ...state,
                tasks: tasksSelected,
                selectedTitle: title,
                selectedDescription: description,
            }
        case ACTIONS.EDIT_TASK:    
            return {
                    ...state,
                    tasks: state.tasks.map(task => {
                        if (task.selected) {
                            task.title = action.title
                            task.description = action.description
                        }
                        return task
                    }),
                    selectedTitle: '',
                    selectedDescription: '',

            }
        case ACTIONS.SET_COMPLITE:
            return {
                    ...state,
                    tasks: state.tasks.map(task => {
                        if (task.id === action.id) {
                            task.complited = !task.complited
                            task.play = false
                        }
                        return task
                    }),
                    tasksComplited: state.tasks.filter(task => task.complited === true).length,
                }
        case ACTIONS.SET_PLAY:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        task.play = !task.play
                        task.complited = false
                    }
                    return task
                })
            }
        default: 
            return state 
    }
}

export default reducer;
