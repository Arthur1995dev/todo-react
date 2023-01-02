import React, {useEffect, useReducer} from 'react';
import reducer, {Reducer} from './components/reducerComp/reducer';
import {TaskList} from './components/TaskList';
import {TaskEdit} from './components/TaskEdit';
import initialState from './components/reducerComp/initialState'; 

import './App.css';

export const App = () => {
  	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(state.tasks))
	}, [state.tasks])
 	 return <div className='component'>
    	<Reducer.Provider value={{state, dispatch}}>
			<TaskList/>
			<TaskEdit/>
		</Reducer.Provider>
  	</div>
}

