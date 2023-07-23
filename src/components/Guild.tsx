import type { Component } from 'solid-js';
import { A } from "@solidjs/router";
import * as api from '../api/guilds';

type GuildIconProps = {
    info: api.GuildInfo;
}

const GuildIcon: Component<GuildIconProps> = (props) => {
    let initials = '';
    let words = props.info.name.split(' ');
    words.forEach((word) => {
        if (word.length > 0) {
            initials += word.charAt(0);
        }
    });

    return (
        <A href={`/guilds/${props.info.id}`} title={props.info.name} draggable={true} class={
            'w-16 h-16 p-2 flex items-center justify-center bg-gray-300 dark:bg-gray-900 m-t-2'}>
            {props.info.avatar ? (
                <img class="w-full h-full" src={`/assets/server/avatar/${props.info.id}`}></img>
            ) : (
                <p class="text-5">{initials}</p>
            )}
        </A>
    );
};

export default GuildIcon;
