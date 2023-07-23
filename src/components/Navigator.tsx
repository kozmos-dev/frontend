import type { Component, JSX } from 'solid-js';

type NavigatorProps = {
  children: JSX.Element;
}

const Navigator: Component<NavigatorProps> = (props) => {
  return (
    <div class="absolute inset-x-2 bottom-2 h-24 p-2 flex gap-2 border-gray-500 bg-gray-200 dark:bg-gray-950 rounded-2xl font-bold">
      {props.children}
    </div>
  );
};

export default Navigator;
