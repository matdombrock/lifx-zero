require('dotenv').config()
global.lifx = require('../lifxWrapper'); 
global.lifx.setToken(process.env.API_TOKEN);
global.lite = require('../lifxWrapperLite'); 
console.log(global.lifx);
console.log("-------");
console.log("Set TOKEN as: "+process.env.API_TOKEN);
console.log("-------");
console.log("Main Wrapper Methods Available At 'lifx'");
console.log("Lite Wrapper Methods Available At 'lite'");
console.log("-------");