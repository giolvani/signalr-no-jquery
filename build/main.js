'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jQueryShim = require('./jQueryShim');
window.jQuery = jQueryShim;
require('./signalR');
var hubConnection = exports.hubConnection = jQueryShim.hubConnection;
var signalR = exports.signalR = jQueryShim.signalR;