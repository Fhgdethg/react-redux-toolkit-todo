import { useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import s from './Scroler.module.scss'

const scroler = document.querySelector('#scroler')

export default function Scroler({ children }) {
  const element = useMemo(() => {
    const elem = document.createElement('div')
    return elem
  }, [])

  window.addEventListener('scroll', () =>
    element.className = `${s.scroler} ${window.scrollY > 100 ? s.show : s.hide}`
  )

  element.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })

  useEffect(() => {
    scroler.appendChild(element)
    return () => scroler.removeChild(element)
  }, [])

  return createPortal(children, element)
}
