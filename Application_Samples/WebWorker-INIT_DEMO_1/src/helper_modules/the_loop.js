



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


module.exports = theLOOP