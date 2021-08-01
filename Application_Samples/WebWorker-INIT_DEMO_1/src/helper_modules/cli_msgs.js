const cliMSGS = {
	successMessage : "<cli_msg type='success'>✅ SUCCESS  \n⏩ toDOM( $domString ) \n➰ [- Added to DOM! -]</cli_msg>",
	missingInput : "<cli_msg type='error'>⛔ ERROR  \n⏩ toDOM( $domString ) \n❗ [- domString >=IS=> ( undefined \<._OR_.\> Empty ) -]</cli_msg>",
	unknownReason : "<cli_msg type='warn'>❓ UNKNOWN ERROR \n⏩ toDOM( $domString ) \n🗽 [- Things somehow went so wrong it's not even able to know what... -]</cli_msg>",
	jokeError : "<cli_msg type='info'>❎ SUCCESS ERROR \n⏩ toDOM( $domString ) \n⭕ [- Application Successfully Failed to Execute Random Task... -]</cli_msg>",
	jsWorksMessage: "<cli_msg type='success'>⛳ WELCOME _cliMSG_ \n⏩ : JavaScript Loaded OK \n🎮 [- TECH >>> Express Node Static + WebPack -]</cli_msg>"
}

module.exports = cliMSGS;