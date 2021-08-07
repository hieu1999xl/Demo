import React, {useState} from 'react'
import TodoForm from '../components/TodoForm/index.jsx'
import TodoList from '../components/TodoList/index.jsx'
function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'

        }
    ]

    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, idx ) => {
        console.log(todo, idx)
        //clone current array to the new one
        const newTodoList = [...todoList]

        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        // newTodoList[idx] = newTodo
        // update todo list
        setTodoList(newTodoList)
    }
    
    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new')
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    const handleTodoFormSubmit = (values) => {
        console.log('Form submit:', values)
    } 
    return (
        <div>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div> 
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    )
}
export default TodoFeature