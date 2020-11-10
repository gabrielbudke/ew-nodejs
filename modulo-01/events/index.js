const EventEmitter = require('events');
const countEvent = new EventEmitter();

const eventName = 'system:count';
countEvent.on(eventName, function(value) {
   console.log('count:', value);
});

let count = 0;
setInterval(function(){
   countEvent.emit(eventName, (count++));
}, 1000);


// const stdin = process.openStdin();
// function main() {
//    return new Promise(function (resolve, reject) {
//       stdin.addListener('data', function(value) {
//          // console.log(`você digitou: ${value.toString().trim()}`);
//          return resolve(value);
//       });      
//    }); 
// }

// main().then(function(value) {
//    console.log('value', value.toString());
// });

