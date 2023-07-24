import type * as misc from './misc'

export interface Role {
  id: string
  name: string
  color: string
}

export interface Field {
  name: string
  value: string
  verified_at: null
}

export interface Account {
  id: string
  username: string
  acct: string
  display_name: string
  locked: boolean
  bot: boolean
  discoverable: boolean
  group: boolean
  created_at: string
  note: string
  url: string
  avatar: string
  avatar_static: string
  header: string
  header_static: string
  followers_count: number
  following_count: number
  statuses_count: number
  last_status_at: string
  noindex: boolean
  emojis: misc.Emoji[]
  roles: Role[]
  fields: Field[]
}
