import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import type * as api from '../api/guilds'

interface GuildIconProps {
  info: api.GuildInfo
}

const GuildIcon: Component<GuildIconProps> = (props) => {
  function initials (): string {
    let initials = ''
    const words = props.info.name.split(' ')
    words.forEach((word) => {
      if (word.length > 0) {
        initials += word.charAt(0)
      }
    })
    return initials
  }

  return (
        <A href={`/guilds/${props.info.id}`} title={props.info.name} draggable={true} class={
            'w-16 h-16 p-2 flex items-center justify-center bg-gray-300 dark:bg-gray-900 m-t-2'}>
            {props.info.avatar
              ? (
                <img class="w-full h-full" src={`/assets/server/avatar/${props.info.id}`} />
                )
              : (
                <p class="text-5">{initials()}</p>
                )}
        </A>
  )
}

export default GuildIcon
