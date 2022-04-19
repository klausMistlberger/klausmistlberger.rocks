"use strict";
/**
 *
 * @param id string
 * @returns HTMLElement
 */
const _e = function (id) {
    return document.getElementById(id);
};
/**
 * random number from lo to hi
 * @param {number} lowest
 * @param {number} highest
 * @returns
 */
const rndNum = function (lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
};
