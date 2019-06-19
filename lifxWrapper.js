const request = require('request-promise');

const api_url = "https://api.lifx.com/v1/";
var token = "null";

exports.setToken = function(user_token){
    var pre = "Bearer ";
    token = pre+user_token;
};
//LIST
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
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
}
//POWER
exports.power = {};
exports.power.on = function (selector="all"){
    const options = {  
        url: api_url+'lights/'+selector+'/state',
        method: 'PUT',
        headers: {
            'Authorization': token,
        },
        form: {
            'power':'on',
        },
    };
    return request(options)
    .then(function(parsedBody){
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
}
exports.power.off = function (selector="all"){
    const options = {  
        url: api_url+'lights/'+selector+'/state',
        method: 'PUT',
        headers: {
            'Authorization': token,
        },
        form: {
            'power':'off',
        },
    };
    return request(options)
    .then(function(parsedBody){
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
}
exports.power.toggle = function (selector="all"){
    const options = {  
        url: api_url+'lights/'+selector+'/toggle',
        method: 'POST',
        headers: {
            'Authorization': token,
        }
    };
    return request(options)
    .then(function(parsedBody){
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
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
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
}
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
exports.effects.breathe.full = async function(data, selector="all"){
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
        return JSON.parse(parsedBody);
    })
    .catch(function (err) {
        // POST failed...
        return err;
    });
}
