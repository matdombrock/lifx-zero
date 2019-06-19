const lifx = require('./lifxWrapper');

//power
exports.on = function(){
    return lifx.power.on();
}
exports.off = function(){
    return lifx.power.off();
}
exports.toggle = function(){
    return lifx.power.toggle();
}
//set color
exports.color = function(color){
    return lifx.state.color(color);
}
//preset colors
exports.red = function(){
    return lifx.state.color("red");
}
exports.green = function(){
    return lifx.state.color("green");
}
exports.blue = function(){
    return lifx.state.color("blue");
}
exports.white = function(){
    return lifx.state.color("white");
}
//set brightness
exports.brightness = function(brightness){
    return lifx.state.brightness(brightness);
}
//preset brightness
exports.dim = function(){
    return lifx.state.brightness(0.5);
}
exports.bright = function(){
    return lifx.state.brightness(1);
}