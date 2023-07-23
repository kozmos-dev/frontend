import type { Component } from 'solid-js';
import { createResource, For } from 'solid-js';
import { A, useLocation, useParams } from '@solidjs/router';
import * as api from '../api/guilds';
import Guild from '../components/Guild';

const col_default_classes = 'h-full box barless';
const guild_default_classes = 'w-16 h-16 p-2 flex items-center justify-center bg-gray-300 dark:bg-gray-900';

const Guilds: Component = () => {
  const params = useParams();
  const location = useLocation();
  const [guilds, { mutate: mutateGuilds, refetch: refetchGuilds }] = createResource(api.getGuildInfos);

  function addGuild(guild: api.GuildInfo) {
    mutateGuilds((g) => {
      if (!g) return [guild];
      return [...g, guild];
    });
  }

  function findGuild(id: string): number {
    let g = guilds();
    if (g) {
      for (let i = 0; i < g.length; i++) {
        if (g[i].id === id) {
          return i;
        }
      }
    }
    return -1;
  }

  function removeGuild(id: string) {
    mutateGuilds((g) => {
      if (g) {
        let i = findGuild(id);
        if (i != -1) {
          delete g[i];
        }
      }
      return g;
    });
  }

  let channel_view = (
    <>
      {guilds.loading && (
        <div></div>
      )}
      {guilds.error && (
        <div></div>
      )}
      {guilds() && (
        <div></div>
      )}
    </>
  );

  return (
    <div class='flex h-full gap-2'>
      <div id="guildList" class={`w-20 ${col_default_classes} ${guilds.loading ? 'overflow-clip' : 'overflow-x-clip'}`}>
        <A href='/guilds' class={guild_default_classes} end={true}>
          <div class='i-tabler-star w-10 h-10' />
        </A>
        {guilds.loading && (
          <div class={`guildPulsing ${guild_default_classes}`}>
            <div class='spin i-tabler-loader-2 w-10 h-10' />
          </div>
        )}
        {guilds.error && (
          <button class={guild_default_classes} onClick={[refetchGuilds, null]}>
            <div class='i-tabler-exclamation-circle w-10 h-10 text-rose-500' />
          </button>
        )}
        {guilds() && (
          <For each={guilds()}>
            {(guild) => (<Guild info={guild}></Guild>)}
          </For>
        )}
      </div>
      <div class={`w-72 ${col_default_classes}`}>
        {location.pathname == '/guilds' ? (
          <div></div>
        ) : channel_view}
      </div>
      <div style={`width: calc(100% - 24rem)`} class={col_default_classes}>

      </div>
    </div>
  );
};

export default Guilds;
