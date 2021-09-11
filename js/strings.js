import { MB } from './constants.js';

export function makeString(mbs) {
    let str = 'X'.repeat(mbs * MB);
    str[0];
    return str;
}

export function double(str, times) {
    for (let i = 0; i < times; i++) {
        str = str + str;
    }
    return str;
}