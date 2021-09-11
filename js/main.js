import { printMemory, getHistory } from './memory.js';
import { makeString, double } from './strings.js';

function plot(data) {
  import('./plot.js').then(({ plot }) => plot(data));
}
 
runBtn.onclick = run;

let a, b;

function run(flatten) {
  console.log('wait until you see a chart');
  printMemory('baseline')
    .then(() => {
      a = makeString(1);
      console.log('a', a.length);
      return printMemory('a = makeString(1)');
    })
    .then(() => {
      b = double(a, 9);
      console.log('b', b.length);
      return printMemory('b = double(a,9)');
    })
    .then(() => {
      a = null;
      return printMemory('a = null');
    })
    .then(() => {
      b = null;
      return printMemory('b = null');
    })
    .then(() => {
      plot(getHistory());
    });
}

