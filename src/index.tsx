/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'
import '@unocss/reset/tailwind-compat.css'
import './index.css'
import 'virtual:uno.css'

render(
  () => (
    <Router>
      <App />
    </Router>
  ), document.getElementById('root') as HTMLElement
)
