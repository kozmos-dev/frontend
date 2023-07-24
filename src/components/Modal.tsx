import type { Component, JSX } from 'solid-js'

interface ModalProps {
  children: JSX.Element
}

const Modal: Component<ModalProps> = (props) => {
  return (
    <section>
        {props.children}
    </section>
  )
}

export default Modal
