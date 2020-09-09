/*
 * analog-gauge <https://github.com/awsmcode/analog-gauge>
 *
 * Copyright (c) 2020, AwsmCode.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (string) {
  return debug(string);
};

function debug(string) {
  return `analog-gauge-${string}`;
}
