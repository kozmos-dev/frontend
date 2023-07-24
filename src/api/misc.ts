export interface Emoji {
  shortcode: string
  url: string
  static_url: string
  visible_in_picker: boolean
}

export class APIError extends Error {
  constructor (message: string) {
    super(message)
    this.message = message
  }
}
