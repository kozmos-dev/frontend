import type { Component } from 'solid-js'
import { useParams } from '@solidjs/router'

const User: Component = () => {
  const params = useParams()

  return (
    <div class="center">
      <div class="w-144 h-full flex-col flexbox">
        <p>user: {params.username}</p>
        <p>page: {params.page !== undefined ? params.page : 'main'}</p>
      </div>
    </div>
  )
}

export default User
