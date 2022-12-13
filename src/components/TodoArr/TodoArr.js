import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../store/todoSlice'
import Todo from '../Todo/Todo'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoArr.scss'
import s from './TodoArr.module.scss'

export default function TodoArr() {
  const dispatch = useDispatch()
  const todoArr = useSelector(state => state.todoSlice.todos)
  const todoErrorData = useSelector(state => state.todoSlice.errorData)

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div className={s.todosWrapper}>
      <TransitionGroup>
        {
          todoErrorData === ''
            ?
            todoArr.map(item => (
              <CSSTransition
                classNames="item"
                timeout={500}
                key={item.id}
              >
                <Todo params={item} />
              </CSSTransition>
            ))
            :
            <h2 className={`${s.onError} dark:text-textColorDark`}>{todoErrorData}</h2>
        }
      </TransitionGroup>
    </div>
  )
}
