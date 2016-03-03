'use strict';

const Promise = require('promise');

function runWindows(argv, config) {
  return new Promise((resolve, reject) => {
    _runWindows(argv, config, resolve, reject);
  });
}

function _runWindows(argv, config, resolve, reject) {
  // TODO: Figure out the simulator
  resolve();
}

module.exports = runWindows;
