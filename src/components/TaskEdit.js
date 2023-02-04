import { useContext, useEffect, useState } from "react"
import { Reducer } from "./reducerComp/reducer";

export const TaskEdit = () => {
    const {state, dispatch} = useContext(Reducer);

    const [title, setTitle] = useState(state.selectedTitle);
    const [description, setDescription] = useState(state.selectedDescription);

    const acceptHundler = () => {
        dispatch({type: 'EDIT_TASK', title: title, description: description})
        dispatch({type: 'SELECTED_TASK'})
    }

    useEffect(() => {
        setTitle(state.selectedTitle)
        setDescription(state.selectedDescription)
    }, [state.selectedTitle, state.selectedDescription])

    return <div className="TaskEdit">
        <h2>Редактировать</h2>
        <div className="Title_Edit">
            <label>Заголовок</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Введите заголовок"></input>
        </div>
        <div className="Description_Edit">
            <label>Описание</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={10} placeholder="Введите описание задачи"></textarea>
        </div>
        <button className="changes_accept button" onClick={acceptHundler}>Изменить</button>
    </div>
}
