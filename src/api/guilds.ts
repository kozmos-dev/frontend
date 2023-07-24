export interface GuildInfo {
  id: string
  name: string
  avatar: boolean
}

export async function getGuildInfo (id: string): Promise<GuildInfo> {
  return { id, name: 'hi', avatar: false }
}

export async function getGuildInfos (): Promise<GuildInfo[]> {
  return [
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false },
    { id: '1', name: 'hi', avatar: false }]
}
