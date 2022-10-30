import React, {useReducer} from 'react';
import reducer, {Reducer} from './components/reducerComp/reducer';
import TaskList from './components/TaskList';
import TaskEdit from './components/TaskEdit';
import initialState from './components/reducerComp/initialState'; 

import './App.css';

const App = () => {
  	const [state, dispatch] = useReducer(reducer, initialState);

 	 return <div>
    	<Reducer.Provider value={{state, dispatch}}>
			<TaskList />
			<TaskEdit />
		</Reducer.Provider>
  	</div>
}



export default App;
