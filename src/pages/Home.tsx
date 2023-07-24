import type { Component } from 'solid-js'
// import { Motion } from '@motionone/solid'
// import { getRandomInt } from '../utils'

/*
const increments = [
  getRandomInt(0, 10),
  getRandomInt(-10, 0),
  getRandomInt(0, 10)
]
*/

// special thanks to everyone listed here (excluding myself)
// - satvrn
/*
const names = [
  'sams',
  'satvrn',
  'Electro1009',
  'blaire',
  'fire900s'
]
*/

const Home: Component = () => {
  let t1: HTMLDivElement | undefined
  let t2: HTMLDivElement | undefined
  let t3: HTMLDivElement | undefined

  /*
  onMount(() => {
    if (!t1 || !t2 || !t3) return;
    setTimeout(() => {
      while (true) {
        t1.style.left = x_pos+"px";
        t1.style.top = y_pos+"px";
      }
    })
  });
  */

  return (
    <div class="w-full h-full">
      <div class="absolute inset-2 inset-b-28 flex flex-col items-center place-content-center z-[-2]" style={{ 'line-height': '5rem' }}>
        <h1 ref={t1} class="accent text-20 font-700 opacity-10 text-nowrap">kozmos kozmos</h1>
        <h1 ref={t2} class="accent text-20 font-700 opacity-10 text-nowrap">kozmos kozmos</h1>
        <h1 ref={t3} class="accent text-20 font-700 opacity-10 text-nowrap">kozmos kozmos</h1>
      </div>
      <div class="absolute inset-0 inset-b-26 flex flex-row items-center place-content-center z-[-1]">
        <div class="h-56 bg-gray-300 dark:bg-gray-900" style={{ width: 'calc((100vw - 40rem) / 2)' }} />
        <div class="w-10 h-56 fadeLeft" />
        <div class="w-140" />
        <div class="w-10 h-56 fadeRight" />
        <div class="h-56 bg-gray-300 dark:bg-gray-900" style={{ width: 'calc((100vw - 40rem) / 2)' }} />
      </div>
      <div class="center flex-col">
        <h1 class="italic accent text-30 font-700 m-t-[-2rem]">kozmos</h1>
        <h1 class="text-5 font-700 m-t-[-2rem]">(slogan here when i have one that doesnt suck)</h1>
      </div>
    </div>
  )
}

export default Home
