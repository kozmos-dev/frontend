import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import type * as api from '../api/chats'

interface ChatIconProps {
  chat: api.Chat
}

const ChatIcon: Component<ChatIconProps> = (props) => {
  return (
        <A href={`/chats/${props.chat.id}`} title={props.chat.account.display_name} draggable={true} class={
            'w-16 h-16 p-2 flex items-center justify-center bg-gray-300 dark:bg-gray-900 m-t-2'} />
  )
}

export default ChatIcon
