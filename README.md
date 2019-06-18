
# A Simple NodeJS API Wrapper For LIFX Lightbulbs
This software is not an office LIFX product and I am not related to LIFX in any way shape or form. Do not blame me if something breaks. 

Make sure to checkout the documentation for the official API at [https://api.developer.lifx.com/docs/](https://api.developer.lifx.com/docs/). 

**NOTE:** I still have not implemented the full API yet, but I'm working on it.

## QUICK START
```js
const lifx  =  require('./LIFX-Wrapper');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');

//List all of your lights in JSON
var list = lifx.list.full();
list.then(function(data){
	console.log(data);
})
```
 
## SETUP
To get started, just require the API wrapper and set your [Auth Token](https://cloud.lifx.com/settings).
```js
const lifx  =  require('./LIFX-Wrapper');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
```

## METHODS
## *```setToken```*
```js
setToken(<token>);
```
**Example**

```js
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
```
**Arguments** 
* Token [Required] - The token you created at [https://cloud.lifx.com/settings](https://cloud.lifx.com/settings).

-------
## *```list.full```*
```js
list.full(<selector>);
```
**Example**

```js
//List All Lights
var list = lifx.list.full();
list.then(function(data){
	console.log(data);
})
//List A Specific Light
var specific = lifx.list.full("My Light");
specific.then(function(data){
	console.log(data);
})
```

**Arguments** 
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

-------
## *```power.on```*
```js
power.on(<selector>);
```
**Example**

```js
lifx.power.on();
```

**Arguments** 
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

-------
## *```power.off```*
```js
power.off(<selector>);
```
**Example**

```js
lifx.power.off();
```

**Arguments** 
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

-------
## *```power.toggle```*
```js
power.toggle(<selector>);
```
**Example**

```js
lifx.power.toggle();
```

**Arguments** 
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

-------
## *```state.full```*
```js
state.full(<state>, <selector>);
```
**Example**

```js
var newState = {
	"power": "on",
	"color": "blue saturation:0.5",
	"brightness": 0.5,
	"duration": 5,
}
lifx.state.full(newState);
```

**Arguments** 
* State [Required] - A JSON object representing the new state ([https://api.developer.lifx.com/docs/set-state](https://api.developer.lifx.com/docs/set-state)).
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

-------
## *```state.brightness```*
```js
state.brightness(<brightness>, <selector>);
```
**Example**

```js
lifx.state.brightness(0.5);
```

**Arguments** 
* Brightness [Required] - A float value between ```0.0``` and ```1.0```.
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

-------
## *```state.color```*
```js
state.color(<color>, <selector>);
```
**Example**

```js
lifx.state.color("red");
```

**Arguments** 
* Color [Required] - A color value. Checkout [https://api.developer.lifx.com/v1/docs/colors](https://api.developer.lifx.com/v1/docs/colors) to see everything you can do with this (it's a lot).
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".

## RETURNING DATA
This wrapper uses "promises". Here is an example of how to return the response from the light to your main app.
```js
const lifx  =  require('./LIFX-Wrapper');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
//setup the promise
var newColor = lifx.state.color();
//follow through with the promise
newColor.then(function(data){
	console.log(data);
})
```

## INTERACTIVE MODE
I have created an NPM script for "Interactive Mode". This loads the wrapper module and sets your key.  
To enter "Interactive Mode" run:
```bash
npm run interactive
```
**NOTE:** Make sure you change the token value in ```./tools/interactive.js``` or this will not work.
