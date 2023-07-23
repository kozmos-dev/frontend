import type { Component } from 'solid-js';
import { A } from "@solidjs/router";

type NavLinkProps = {
  name: string;
  href: string;
  icon: string;
}

const NavLink: Component<NavLinkProps> = (props) => {
  return (
    <A href={props.href} end={props.href === '/'}>
      <figure class="w-20 h-20 p-2 flex flex-col items-center justify-center rounded-lg transition hover:bg-gray-300 dark:hover:bg-gray-900">
        <div class={`${props.icon} w-10 h-10`} />
        <figcaption class="text-sm whitespace-nowrap">{props.name}</figcaption>
      </figure>
    </A>
  );
};

export default NavLink;
