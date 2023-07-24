import type { Component } from 'solid-js'
// import { A, useParams } from '@solidjs/router'

const News: Component = () => {
  // const params = useParams()

  return (
    <div class="center">
      <div class="w-144 h-full flex-col flexbox">
        <div class="w-full h-18 flex-row flexbox">
          <h1 class="text-8 font-bold accent">news</h1>
          <div class="w-full" />
          <div class="custom-select">
            <select class="bg-gray-300 dark:bg-gray-900 box outline-none p-2">
              <option value="1">all</option>
              <option value="2">mentions</option>
              <option value="3">statuses</option>
              <option value="4">boosts</option>
              <option value="5">follows</option>
              <option value="6">favorites</option>
              <option value="7">polls</option>
              <option value="8">updates</option>
            </select>
          </div>
        </div>
        <div class="w-full flex-col flexbox" style={{ height: 'calc(100% - 4.5rem)' }} />
      </div>
    </div>
  )
}

export default News
