import React from 'react'
import { ButtonCss } from "./components/ButtonCss"
import { Button } from "./components/Button"

export const App = () => {
  return (
    <div>
      <ButtonCss />
      <Button cta>ORDER</Button>
      <Button outlined>ORDER</Button>
    </div>
  )
}
