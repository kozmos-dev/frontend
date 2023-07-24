import type { Component } from 'solid-js'

export interface GuildMention {
  user: string // user ID (mentioner)
  server: string // server ID
  channel: string // channel ID
  message: string // message ID
}

export interface PostMention {
  user: string // user ID (mentioner)
  post: string // post ID
}

export interface GuildReaction {
  user: string // user ID (reactor)
  server: string // server ID
  channel: string // channel ID
  message: string // message ID (your message)
  emoji: string // emoji name
}

export interface PostReaction {
  user: string // user ID (reactor)
  post: string // post ID (your post)
  emoji: string // emoji name
}

/*
export type GuildBoost = {
    user: string, // user ID
    server: string, // server ID
    channel: string, // channel ID
    message: string, // message ID (your message)
}
*/

export interface PostBoost {
  user: string // user ID
  post: string // post ID (your post)
}

/*
export type GuildQuote = {
    user: string, // user ID
    quote: string, // quote ID (their post)
    server: string, // server ID
    channel: string, // channel ID
    message: string, // message ID (your message)
}
*/

export interface PostQuote {
  user: string // user ID
  quote: string // quote ID (their post)
  post: string // post ID (your post)
}

export interface GuildReply {
  user: string // user ID
  server: string // server ID
  channel: string // channel ID
  message: string // message ID (your message)
  reply: string // reply ID (their message)
}

export interface PostReply {
  user: string // user ID
  post: string // post ID (your post)
  reply: string // reply ID (their post)
}

export interface Follow {
  user: string // user ID
}

interface NotificationProps {
  // type: GuildMention | PostMention | GuildReaction | PostReaction | GuildBoost | PostBoost | GuildQuote | PostQuote | GuildReply | PostReply | Follow;
  type: GuildMention | PostMention | GuildReaction | PostReaction | PostBoost | PostQuote | GuildReply | PostReply | Follow
}

const Notification: Component<NotificationProps> = () => {
  return (
    <div class="w-full h-full flex flex-row justify-center">
      <div class="w-120 h-full p-2 flex flex-col gap-2 bg-gray-200 dark:bg-gray-950 rounded-2xl" />
    </div>
  )
}

export default Notification
