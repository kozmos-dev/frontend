import type { Component, JSX } from 'solid-js'

interface NavigatorProps {
  children: JSX.Element
}

const Navigator: Component<NavigatorProps> = (props) => {
  return (
    <div class="absolute inset-x-2 bottom-2 h-24 font-bold flexbox">
      {props.children}
    </div>
  )
}

export default Navigator
