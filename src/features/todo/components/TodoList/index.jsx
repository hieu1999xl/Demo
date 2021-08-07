import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import './styles.css'
TodoList.propTypes = {
    TodoList: propTypes.array,
    onTodoClick: propTypes.func
}

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList( {todoList, onTodoClick} ) {
    const handleTodoClick = (todo,idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo,idx )
    }
    return(
        <ul className="todo-list">
            {todoList.map((todo,idx) => (
                <li 
                className={classnames({ 'todo-item' : true, completed: todo.status === 'completed'})} 
                 key={todo.id}
                 onClick={() => handleTodoClick(todo,idx)}
                 > {todo.title} </li>
            ))}
        </ul>
    )
}

export default TodoList