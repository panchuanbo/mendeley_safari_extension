function handleMessage(event) {
    var messageName = event.name;
    var messageData = event.message;
    
    if (messageName == "mendeley") {
	document.getElementsByTagName("body")[0].appendChild(document.createElement("script")).setAttribute("src","https://static.mendeley.com/bin/extensions/bookmarklet.js");
    }
}

safari.self.addEventListener("message", handleMessage, false);

console.log("loaded");
