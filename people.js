const yourName = require("./names.js");
const hobby = require("./hobbies.js");

function user(){
    return {fullName: yourName("Vincenzo", "Terracciano"), hobbies: hobby("football", "music", "gym")}
}

module.exports = user