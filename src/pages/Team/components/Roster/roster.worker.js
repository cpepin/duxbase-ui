import * as Comlink from 'comlink';
import find from 'lodash/find';

const rosterWorker = {
  findPlayerById: (players, id) => {
    return find(players, player => player.id === id);
  },
};

Comlink.expose(rosterWorker);
