/**
 * Created by vevHack on 2015/7/15.
 */
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}

var start = new Date();
setTimeout(function () {
    var end = new Date();
    console.log('耗时', end - start, 'ms');
}, 500);
while (new Date() - start < 1000) {
}

var obj = {};
console.log(obj.foo);
obj.foo = 'bar';

var fireCount = 0;
var start = new Date();
var timer = setInterval(function () {
    if (new Date() - start > 1000) {
        clearInterval(timer);
        console.log(fireCount);
        return;
    }
}, 0);
//requestAnimationFrame()
//process.trick()
var functionHasReturned = false;
asyncFunction(function () {
    console.assert(functionHasReturned)
});
functionHasReturned = true;

var calculationCache = {},
    calculationCallbacks = {},
    mathWorker = new Worker('calculator.js');
mathWorker.addEventListener('message', function (e) {
    var message = e.data;
    calculationCache[message.formula] = message.result;
    calculationCallbacks[message.formula](message.result)
});
function runCalculation(formula, callback) {
    if (formula in calculationCache) {
        return callback(calculationCache[formula]);
    }
    if (formula in calculationCallbacks) {
        return setTimeout(function () {
            runCalculation(formula, callback)
        }, 0)
    }
}
