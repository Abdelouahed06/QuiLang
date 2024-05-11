import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import Dashboard from './pages/Dashboard';

import Admins from './pages/Users/Admins';
import Players from './pages/Users/Players';

import Avatars from './pages/Games_Option/Avatars';
import Messages from './pages/Games_Option/Messages';
import Langueses from './pages/Games_Option/Langueses';


import Game_a from './pages/Games_Managmant/Game_a';
import Game_b from './pages/Games_Managmant/Game_b';
import Game_c from './pages/Games_Managmant/Game_c';
import Game_d from './pages/Games_Managmant/Game_d';
import Game_e from './pages/Games_Managmant/Game_e';

import Settings from './pages/Settings';


function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/Users/Admins"
          element={
            <>
              <Admins />
            </>
          }
        />
        <Route
          path="/Users/Players"
          element={
            <>
              <Players />
            </>
          }
        />
         <Route
          path="/games-tools/Langueses"
          element={
            <>
              <Langueses />
            </>
          }
        />
        <Route
          path="/games-tools/avatars"
          element={
            <>
              <Avatars />
            </>
          }
        />
         <Route
          path="/games-tools/messages"
          element={
            <>
              <Messages />
            </>
          }
        />
         <Route
          path="/games-managmant/game_a"
          element={
            <>
              <Game_a />
            </>
          }
        />
        <Route
          path="/games-managmant/game_b"
          element={
            <>
              <Game_b />
            </>
          }
        />
        <Route
          path="/games-managmant/game_c"
          element={
            <>
              <Game_c />
            </>
          }
        />
        <Route
          path="/games-managmant/game_d"
          element={
            <>
              <Game_d />
            </>
          }
        />
        <Route
          path="/games-managmant/game_e"
          element={
            <>
              <Game_e />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Settings />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
