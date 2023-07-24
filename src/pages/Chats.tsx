import type { Component } from 'solid-js'
import { createResource, For } from 'solid-js'
import * as api from '../api/chats'
import Chat from '../components/Chat'

const chatDefaultClasses = 'w-16 h-16 p-2 flex items-center justify-center bg-gray-300 dark:bg-gray-900'

const Chats: Component = () => {
  const [chats, { /* mutate: mutateChats, */ refetch: refetchChats }] = createResource(api.chats)

  return (
    <div class="center gap-2">
      <div class="w-72 h-full flex-col flexbox">
        {chats.loading && (
          <div class={`chatPulsing ${chatDefaultClasses}`}>
            <div class="spin i-tabler-loader-2 w-10 h-10" />
          </div>
        )}
        {chats.error as boolean && (
          <button class={chatDefaultClasses} onClick={[refetchChats, null]}>
            <div class="i-tabler-exclamation-circle w-10 h-10 text-rose-500" />
          </button>
        )}
        {(chats() != null) && (
          <For each={chats()}>
            {(chat) => (<Chat chat={chat} />)}
          </For>
        )}
      </div>
      <div class="w-144 h-full flex-col flexbox">
        <p>messages</p>
      </div>
    </div>
  )
}

export default Chats
