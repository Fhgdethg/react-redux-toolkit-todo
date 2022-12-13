import { useState } from "react";

export const useConfigureMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem('mode')
      ?
      localStorage.getItem('mode')
      :
      ''
  )

  function configureMode() {
    let mode = localStorage.getItem('mode')
    if (mode === 'dark') {
      localStorage.setItem('mode', '')
      setMode(localStorage.getItem('mode'))
    } else {
      localStorage.setItem('mode', 'dark')
      setMode(localStorage.getItem('mode'))
    }
  }

  return {mode, configureMode}
}