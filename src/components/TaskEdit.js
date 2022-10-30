const TaskEdit = () => {
    return <div className="TaskEdit">
        <h2>Редактирование</h2>
        <div className="Title_Edit">
            <label>Изменить заголовок</label>
            <input></input>
        </div>
        <div className="Description_Edit">
            <label>Изменить описание</label>
            <input></input>
        </div>
        <button className="changes_accept">Сохранить</button>
    </div>
}

export default TaskEdit;