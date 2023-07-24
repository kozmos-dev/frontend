import type { Component } from 'solid-js'
import { createResource, For } from 'solid-js'
import { A, useLocation/*, useParams */ } from '@solidjs/router'
import * as api from '../api/guilds'
import Guild from '../components/Guild'

const columnDefaultClasses = 'h-full box barless'
const guildDefaultClasses = 'w-16 h-16 p-2 flex items-center justify-center bg-gray-300 dark:bg-gray-900'

const Guilds: Component = () => {
  // const params = useParams()
  const location = useLocation()
  const [guilds, { /* mutate: mutateGuilds, */ refetch: refetchGuilds }] = createResource(api.getGuildInfos)

  /*
  function addGuild (guild: api.GuildInfo): void {
    mutateGuilds((g) => {
      if (g === undefined) return [guild]
      return [...g, guild]
    })
  }

  function findGuild (id: string): number {
    const g = guilds()
    if (g !== undefined) {
      for (let i = 0; i < g.length; i++) {
        if (g[i].id === id) {
          return i
        }
      }
    }
    return -1
  }

  function removeGuild (id: string): void {
    mutateGuilds((g) => {
      if (g !== undefined) {
        const i = findGuild(id)
        if (i !== -1) {
          g.splice(i, 1)
        }
      }
      return g
    })
  }
  */

  return (
    <div class="flex h-full gap-2">
      <div id="guildList" class={`w-20 ${columnDefaultClasses} ${guilds.loading ? 'overflow-clip' : 'overflow-x-clip'}`}>
        <A href="/guilds" class={guildDefaultClasses} end={true}>
          <div class="i-tabler-star w-10 h-10" />
        </A>
        {guilds.loading && (
          <div class={`guildPulsing ${guildDefaultClasses}`}>
            <div class="spin i-tabler-loader-2 w-10 h-10" />
          </div>
        )}
        {guilds.error as boolean && (
          <button class={guildDefaultClasses} onClick={[refetchGuilds, null]}>
            <div class="i-tabler-exclamation-circle w-10 h-10 text-rose-500" />
          </button>
        )}
        {(guilds() != null) && (
          <For each={guilds()}>
            {(guild) => (<Guild info={guild} />)}
          </For>
        )}
      </div>
      <div class={`w-72 ${columnDefaultClasses}`}>
        {location.pathname === '/guilds'
          ? (
          <div />
            )
          : (
            <>
              {guilds.loading && (
                <div />
              )}
              {guilds.error as boolean && (
                <div />
              )}
              {(guilds() != null) && (
                <div />
              )}
            </>
            )}
      </div>
      <div style={{ width: 'calc(100% - 24rem)' }} class={columnDefaultClasses} />
    </div>
  )
}

export default Guilds
