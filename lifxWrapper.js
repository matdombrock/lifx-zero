const request = require('request-promise');
const v = require('@mdombrock/verbose-zero');

const api_url = "https://api.lifx.com/v1/";
var token = "null";

exports.setToken = function(user_token){
    var pre = "Bearer ";
    token = pre+user_token;
};
//LIST
//https://api.developer.lifx.com/docs/list-lights
exports.list = {};
exports.list.full = function (selector="all"){
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
        v.logm(["list.full finished with an error",err]);
        return err;
    });
}
//POWER
//https://api.lifx.com/v1/lights/:selector/toggle
exports.power = {};
exports.power.toggle = async function (selector="all"){
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
// power helpers
exports.power.on = async function (selector="all"){
    var newState = {
        'power':'off'
    };
    return module.exports.state.full(newState, selector);
}
exports.power.off = async function (selector="all"){
    var newState = {
        'power':'on'
    };
    return module.exports.state.full(newState, selector);
}
//STATE
exports.state = {};
exports.state.full = async function (state, selector="all"){
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
        v.logm(["state.full finished",JSON.parse(parsedBody)]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        v.logm(["state.full finished with an error",err]);
        return err;
    });
}
// state helpers
exports.state.brightness = async function (brightness, selector="all"){
    var newState = {
        'brightness':brightness
    };
    return module.exports.state.full(newState, selector);
}
exports.state.color = async function (color, selector="all"){
    var newState = {
        'color':color
    };
    return module.exports.state.full(newState, selector);
}
//EFFECTS
exports.effects = {};
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
exports.effects.breathe = {};
exports.effects.breathe.full = async function(data, selector="all"){
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
        v.logm(["effects.breathe.full finished with an error",err]);
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
}
