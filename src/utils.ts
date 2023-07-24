export function getRandomInt (min: number, max: number): number {
  return Math.round(min + (Math.random() * (max - min)))
}

export function randomSort (): number {
  return Math.random() - 0.5
}

export function convertRemToPixels (rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export function range (low: number, high: number): number[] {
  const array: number[] = []

  for (let i = low; i < high + 1; i++) {
    array[i - low] = i
  }

  return array
}

// adapted from https://www.js-howto.com/how-to-format-dates-with-intl-relativetimeformat/
const SECOND_MILLISECONDS = 1000

export function getRelativeTime (timestamp: string): string {
  return getRelativeTimeFromDate(new Date(timestamp))
}

export function getRelativeTimeFromDate (date: Date): string {
  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto'
  })

  const secondsDifference = (date.getTime() - Date.now()) / SECOND_MILLISECONDS
  const minutesDifference = Math.floor(secondsDifference / 60)
  const hoursDifference = Math.floor(secondsDifference / 60 / 60)
  const daysDifference = Math.floor(secondsDifference / 60 / 60 / 24)

  if (minutesDifference === 0) {
    return rtf.format(Math.floor(secondsDifference), 'second')
  } else if (hoursDifference === 0) {
    return rtf.format(minutesDifference, 'minute')
  } else if (daysDifference === 0) {
    return rtf.format(hoursDifference, 'hour')
  } else {
    return rtf.format(daysDifference, 'day')
  }
}
