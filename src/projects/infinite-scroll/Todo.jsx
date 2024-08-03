const Todo = ({ task }) => {

    return (
        <p className="bg-slate-300 p-2 rounded-sm flex items-center justify-between">
            <span>{task.id} | {task.title}</span>

            <span>{task.completed ? '✅' : '🟥'}</span>
        </p>
    )
}

export default Todo;