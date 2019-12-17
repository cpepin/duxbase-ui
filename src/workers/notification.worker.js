import * as Comlink from 'comlink';
import io from 'socket.io-client';

import { getSocketSource } from '../utils/env';

const socket = io.connect(getSocketSource());

function subscribe(event, cb) {
  socket.on(event, cb);
}

Comlink.expose(subscribe);
