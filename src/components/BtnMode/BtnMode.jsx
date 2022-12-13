import React from 'react'
import s from './BtnMode.module.scss'

export default function BtnMode({changeMode}) {
  return (
    <button
      className={`${s.btnMode} dark:text-bodyBgDark 
      dark:border-bodyBgDark dark:hover:bg-textColorDark`}
      onClick={changeMode}
    >
      Set Theme
    </button>
  )
}
