
startLoop = () => {
	toDOM("<cli_msg type='info'>❎ STARTING THE LOOP \n⏩ startLoop() \n⭕ [- Thread-Blocking Loop has Started -]</cli_msg>");
	const loopNumberInputValue = document.getElementById("loopValue").value;
	const loopInWebWorker = document.getElementById("sendToWebWorker").checked;
	const loopNumber = loopNumberInputValue * 1000000 ;
	const timeExpected = loopNumber ;
	const loopInsideOf = (loopInWebWorker ? "UI_Thread" : "WW_Thread")
	
	toDOM("<cli_msg type='success'>⛳ LoopNumber: "+ loopNumber +" \n⏩ : Expected Execution Time: "+ timeExpected+"ms \n🎮 [- LOOPING_INSIDE >>> "+loopInsideOf+" -]</cli_msg>");

	var ExecTime = theLOOP(loopNumber,loopInWebWorker);

	
	toDOM("<cli_msg type='warn'>⛔ ENDING THE LOOP \n⏩ startLoop() \n➰ [- Thread-Blocking Loop has Finished in "+ Math.trunc( ExecTime )/1000 +"s -]</cli_msg>");
}


module.exports = startLoop