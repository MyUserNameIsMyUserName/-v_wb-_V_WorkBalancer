const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

theLOOP = (loopNumber=1000000, loopInWebWorker = false) => {
	const TimeOfStart = performance.now();
	var loopPosition = 0;
	for ( loopPosition = 0; loopPosition < loopNumber; loopPosition++) {
		var timeOfThis = performance.now();
		var tempCalcVal = (( loopPosition * loopPosition ) - ( loopPosition * loopPosition ))/1;
	}
	const TimeOfFinish = performance.now();
	const ExecTime = TimeOfFinish - TimeOfStart;
	return ExecTime;
}

const wrapped = performance.timerify(theLOOP);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped();

module.exports = theLOOP();