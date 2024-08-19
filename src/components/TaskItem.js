const TaskItem = ({ task, deleteTask, startEditTask }) => {

    return (

        <li>

            <span>{task.text}</span>

            <button onClick={() => startEditTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>

        </li>

    )

}

export default TaskItem;