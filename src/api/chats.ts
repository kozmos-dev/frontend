import type * as accounts from './accounts'
import * as misc from './misc'

export interface Message {
  account_id: string
  attachment: null | string
  card: null | string
  chat_id: string
  content: string
  created_at: string
  emojis: misc.Emoji[]
  id: string
  unread: boolean
}

export interface Chat {
  account: accounts.Account
  id: string
  last_message: Message
  unread: number
  updated_at: string
}

export async function chats (muted: boolean): Promise<Chat[]> {
  const response = await fetch(`/api/v1/pleroma/chats?with_muted=${muted ? 'true' : 'false'}`)
  const json = await response.json()

  if (json.error !== undefined) {
    throw new misc.APIError(json.error)
  }

  return json
}
