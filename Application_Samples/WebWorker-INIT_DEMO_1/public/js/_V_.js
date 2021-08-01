try {
	toDOM(cliMSGS.unknownReason);
} catch (error) {
	console.log(error);
}

let cliMSGS = {
	successMessage : "<cli_msg type='success'>✅ SUCCESS  \n⏩ toDOM( $domString ) \n➰ [- Added to DOM! -]</cli_msg>",
	missingInput : "<cli_msg type='error'>⛔ ERROR  \n⏩ toDOM( $domString ) \n❗ [- domString >=IS=> ( undefined <_OR_> Empty ) -]</cli_msg>",
	unknownReason : "<cli_msg type='warn'>❓ UNKNOWN ERROR \n⏩ toDOM( $domString ) \n🗽 [- Things somehow went so wrong it's not even able to know what... -]</cli_msg>",
	jokeError : "<cli_msg type='info'>❎ SUCCESS ERROR \n⏩ toDOM( $domString ) \n⭕ [- Application Successfully Failed to Execute Random Task... -]</cli_msg>",
	jsWorksMessage: "<cli_msg type='success'>⛳ WELCOME _cliMSG_ \n⏩ : JavaScript Loaded OK \n🎮 [- TECH >>> Express Node Static + WebPack -]</cli_msg>"
}

try {
	toDOM(cliMSGS.unknownReason);
} catch (error) {
	console.log(error);
}

toDOM = (domString = null) => {
	var docBody = document.querySelector("body");
	if (domString === null) {
		docBody.innerHTML += cliMSGS.missingInput;
		return false;
	}
	const parser = new DOMParser();
	const doc = parser.parseFromString(domString, "application/xml")
	docBody.append(doc.documentElement);
	return true;
}

startLoop = () => {
	toDOM("<cli_msg type='info'>❎ STARTING THE LOOP \n⏩ startLoop() \n⭕ [- Thread-Blocking Loop has Started -]</cli_msg>");
	const loopNumberInputValue = document.getElementById("loopValue").value;
	const loopInWebWorker = document.getElementById("sendToWebWorker").checked;
	const loopNumber = loopNumberInputValue * 10000 ;
	const timeExpected = loopNumber ;
	const loopInsideOf = (loopInWebWorker ? "UI_Thread" : "WW_Thread")
	
	toDOM("<cli_msg type='success'>⛳ LoopNumber: "+ loopNumber +" \n⏩ : Expected Execution Time: "+ timeExpected+"ms \n🎮 [- LOOPING_INSIDE >>> "+loopInsideOf+" -]</cli_msg>");
	toDOM("<cli_msg type='warn'>⛔ ENDING THE LOOP \n⏩ startLoop() \n➰ [- Thread-Blocking Loop has Finished -]</cli_msg>");
}

(()=>{
	toDOM(cliMSGS.jsWorksMessage);
})()

