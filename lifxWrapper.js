const request = require('request-promise');
const v = require('@mdombrock/verbose-zero');

const api_url = "https://api.lifx.com/v1/";
var token = "null";//DO NOT SET THIS TOKEN

/*
MAIN WRAPPER METHODS
*/
//https://api.developer.lifx.com/docs/authentication
exports.setToken = function(user_token){
    var pre = "Bearer ";
    token = pre+user_token;
};
//https://api.developer.lifx.com/docs/list-lights
exports.list = function (selector="all"){
    const options = {  
        url: api_url+'lights/'+selector,
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    };
    return request(options)
    .then(function(parsedBody){
        v.logm(["list finished",JSON.parse(parsedBody)]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        v.logm(["list finished with an error",err]);
        return err;
    });
}
//https://api.lifx.com/v1/lights/:selector/toggle
exports.togglePower = async function (selector="all"){
    const options = {  
        url: api_url+'lights/'+selector+'/toggle',
        method: 'POST',
        headers: {
            'Authorization': token,
        }
    };
    return request(options)
    .then(function(parsedBody){
        v.logm(["power.toggle finished",JSON.parse(parsedBody)]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        v.logm(["power.toggle finished with an error",err]);
        return err;
    });
}
//https://api.developer.lifx.com/docs/set-state
exports.state = async function (state, selector="all"){
    const options = {  
        url: api_url+'lights/'+selector+'/state',
        method: 'PUT',
        headers: {
            'Authorization': token,
        },
        form: state,
    };
    return request(options)
    .then(function(parsedBody){
        v.logm(["state finished",JSON.parse(parsedBody)]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        v.logm(["state finished with an error",err]);
        return err;
    });
}
exports.effects = {};
//https://api.developer.lifx.com/docs/effects-off
exports.effects.off = async function(power_off=false, selector="all"){
    const options = {  
        url: api_url+'lights/'+selector+'/effects/off',
        method: 'POST',
        headers: {
            'Authorization': token,
        },
        form: {
            'power_off':power_off
        },
    };
    return request(options)
    .then(function(parsedBody){
        v.logm(["effects.off finished",JSON.parse(parsedBody)]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        v.logm(["effects.off finished with an error",err]);
        return err;
    });
}
//https://api.developer.lifx.com/docs/breathe-effect
exports.effects.breathe = async function(data = {"color": "blue","period": 1,"cycles": 1,"persist": false,"power_on": true,"peak": 0.4}, selector="all"){
    /*{"color": "blue","period": 1,"cycles": 1,"persist": false,"power_on": true,"peak": 0.4}*/
    const options = {  
        url: api_url+'lights/'+selector+'/effects/breathe',
        method: 'POST',
        headers: {
            'Authorization': token,
        },
        form: data,
    };
    return request(options)
    .then(function(parsedBody){
        v.logm(["effects.breathe finished",JSON.parse(parsedBody)]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        v.logm(["effects.breathe finished with an error",err]);
        return err;
    });
}
/*
HELPER METHODS
*/
exports.set = {};
exports.set.brightness = async function (brightness, selector="all"){
    var newState = {
        'brightness':brightness
    };
    return module.exports.state(newState, selector);
}
exports.set.color = async function (color, selector="all"){
    var newState = {
        'color':color
    };
    return module.exports.state(newState, selector);
}
exports.set.on = async function (selector="all"){
    var newState = {
        'power':'on'
    };
    return module.exports.state(newState, selector);
}
exports.set.off = async function (selector="all"){
    var newState = {
        'power':'off'
    };
    return module.exports.state(newState, selector);
}
/*
PRESET COLORS
*/
exports.set.red = function(selector="all"){
    return module.exports.state({'color':'red'},selector);
}
exports.set.green = function(selector="all"){
    return module.exports.state({'color':'green'},selector);
}
exports.set.blue = function(selector="all"){
    return module.exports.state({'color':'blue'},selector);
}
exports.set.white = function(selector="all"){
    return module.exports.state({'color':'white'},selector);
}
/*
PRESET BRIGHTNESS
*/
exports.set.dim = function(selector="all"){
    return module.exports.state({'brightness':0.5},selector);
}
exports.set.bright = function(selector="all"){
    return module.exports.state({'brightness':1.0},selector);
}