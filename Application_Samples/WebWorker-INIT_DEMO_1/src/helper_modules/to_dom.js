const cliMSGS = require('./cli_msgs')

toDOM = (domString = null) => {
	var docBody = document.querySelector("body");
	var errorChk = false;
	if (domString === null) {
		errorChk = true;
	}

	const parser = new DOMParser();
	var docFile;
	if (errorChk) {
		docFile = parser.parseFromString(cliMSGS.missingInput, "application/xml")
		docBody.append(docFile.documentElement);
		return false;
	}
	try {
		docFile = parser.parseFromString(domString, "application/xml")
		docBody.append(docFile.documentElement);
		return true;
	} catch (e) {
		console.warn("e");
		return false;
	}
}

module.exports = toDOM