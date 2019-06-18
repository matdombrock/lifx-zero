require('dotenv').config()
global.lifx = require('../lifxWrapper'); 
global.lifx.setToken(process.env.API_TOKEN);
console.log(global.lifx);
console.log("Set TOKEN as: "+process.env.API_TOKEN);