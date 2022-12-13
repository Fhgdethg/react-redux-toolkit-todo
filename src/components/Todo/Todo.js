import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, readyDo } from '../../store/todoSlice'
import s from './Todo.module.scss'

const Todo = React.memo(({ params }) => {
  const dispatch = useDispatch();

  const [complete, setCompleted] = useState(params.completed)

  const checkedDo = e => {
    const todo = {
      ...params,
      completed: e.target.checked
    }

    dispatch(readyDo(todo))
    setCompleted(e.target.checked)
  }

  return (
    <div className={`${s.todo} dark:bg-bodyBgDark dark:text-textColorDark`}>
      <div className={s.todoLeft}>
        <label>
          <input
            type="checkbox"
            defaultChecked={complete}
            onChange={checkedDo}
            className={`${s.radio} dark:border-bgHeadDark !important`}
          />
          <div className={`${s.active} ${s.activeJeneral} dark:bg-bgHeadDark !important`}></div>
        </label>
        <p className={`${params.completed && s.completed} ${s.textDo}`}>
          {params.title}
        </p>
      </div>
      <button 
      onClick={() => dispatch(deleteTodo(params.id))}
      className={`${s.deleteBtn} dark:hover:bg-bgHeadDark`}
      >
        Delete
      </button>
    </div>
  )
})

export default Todo
