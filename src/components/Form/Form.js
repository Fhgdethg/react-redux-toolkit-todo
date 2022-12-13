import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDo } from '../../store/todoSlice'
import s from './Form.module.scss'

export default function Form() {
  const dispatch = useDispatch()
  const [todoInput, setTodoInput] = useState('')
  const refer = useRef()

  useEffect(() => 
    refer.current.focus()
  ,[])

  return (
    <form
      className={`${s.form} dark:bg-bodyBgDark`}
      onSubmit={(e) => {
        e.preventDefault()
        todoInput.length && dispatch(addDo(todoInput))
      }}
    >
      <input
        type="text"
        onChange={(e) => setTodoInput(e.target.value)}
        className={`${s.addDo} dark:border-bgHeadDark
        dark:outline-bgHeadDark dark:placeholder:text-bgHeadDark
        dark:text-bgHeadDark`}
        placeholder="write do"
        ref={refer}
      />
      <button
        type="submit"
        className={`${s.adBtn} dark:border-bgHeadDark dark:text-textColorDark dark:hover:bg-bgHeadDark`}
      >
        ADD Do
      </button>
    </form>
  )
}
