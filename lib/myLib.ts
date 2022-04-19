/**
 * 
 * @param id string
 * @returns HTMLElement
 */
const _e = function( id: string ) {
    return document.getElementById( id ); 
}

/**
 * random number from lo to hi
 * @param {number} lowest
 * @param {number} highest
 * @returns 
 */
const rndNum = function (lo: number, hi: number) {
    return Math.floor (Math.random () * (hi - lo + 1) ) + lo;
}

