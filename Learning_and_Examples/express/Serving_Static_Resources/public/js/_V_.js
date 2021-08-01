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
	jsWorksMessage: "<cli_msg type='success'>⛳ WELCOME _cliMSG_ \n⏩ : JavaScript Loaded OK \n🎮 [- Express Node Static Resources Server -]</cli_msg>"
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
	docBody.innerHTML += domString;
	return true;
}

(()=>{
	toDOM(cliMSGS.jsWorksMessage);
	toDOM(cliMSGS.unknownReason);
	toDOM(cliMSGS.successMessage);
	toDOM(cliMSGS.jokeError);
})()

toDOM(cliMSGS.successMessage);

toDOM();