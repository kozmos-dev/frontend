import type { Component } from 'solid-js';
import { lazy } from 'solid-js';

// PAGES

const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const Posts = lazy(() => import("./pages/Posts"));
const Guilds = lazy(() => import("./pages/Guilds"));
const Messages = lazy(() => import("./pages/Messages"));
const Users = lazy(() => import("./pages/Users"));
const User = lazy(() => import("./pages/User"));
const Settings = lazy(() => import("./pages/Settings"));

// COMPONENTS

import { Routes, Route } from "@solidjs/router";
import Navigator from './components/Navigator';
import NavLink from './components/NavLink';

const App: Component = () => {
  return (
    <>
      <div class="m-2" style="height: calc(100vh - 7.5rem)">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/posts" component={Posts} />
          <Route path="/guilds/:id?" component={Guilds} />
          <Route path="/messages" component={Messages} />
          <Route path="/users" component={Users} />
          <Route path="/users/:username/:page?" component={User} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </div>
      <Navigator>
        <NavLink name='home' href='/' icon="i-tabler-home" />
        <NavLink name='news' href='/news' icon="i-tabler-news" />
        <NavLink name='posts' href='/posts' icon="i-tabler-align-left" />
        <NavLink name='guilds' href='/guilds' icon="i-tabler-server" />
        <NavLink name='messages' href='/messages' icon="i-tabler-messages" />
        <NavLink name='users' href='/users' icon="i-tabler-users" />
        <NavLink name='settings' href='/settings' icon="i-tabler-settings" />
        <div class="w-full" />
      </Navigator>
    </>
  );
};

export default App;
