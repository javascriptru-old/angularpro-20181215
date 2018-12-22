
const oldSetTimeout = setTimeout;
setTimeout = (callback, time) => {
    console.log('START', time);
    oldSetTimeout(() => {
        callback();
        console.log('FINISH', time);
    }, time);
}

//----------------------


setTimeout(() => {
  console.log('DONE');
}, 3000);


setTimeout(() => {
    console.log('DONE');
}, 5000);
  