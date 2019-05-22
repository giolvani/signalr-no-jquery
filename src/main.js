'use strict';

const jQueryShim = require('./jQueryShim');
window.jQuery = jQueryShim;
require('./signalR');
export const hubConnection = jQueryShim.hubConnection;
export const signalR = jQueryShim.signalR;
