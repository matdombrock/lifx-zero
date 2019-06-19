# LIFX-ZERO
A (Hopefully) Better NodeJS API Wrapper For LIFX Lightbulbs.

This software is not an official LIFX product and I am not related to LIFX in any way shape or form. Do not blame me if something breaks. 

Make sure to checkout the documentation for the official API at [https://api.developer.lifx.com/docs/](https://api.developer.lifx.com/docs/). 

**NOTE:** I still have not implemented the full API yet, but I'm working on it.

* [Install](#install)
* [Setup](#setup)
* [Main Wrapper Methods](#main-wrapper-methods)
	* [setToken()](#settoken)
	* [list()](#list)
	* [state()](#state)
	* [breatheEffect()](#breatheeffect)
* [Returning Data](#returning-data)
* [Interactive Mode](#interactive-mode)

# QUICK START
```js
const lifx  =  require('lifx-zero');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');

//List all of your lights in JSON
var list = lifx.list();
list.then(function(data){
	console.log(data);
})
```
 
# INSTALL
**Using GIT**
```bash
git clone https://github.com/matdombrock/lifx-zero.git
```
**Using NPM**
```bash
npm install lifx-zero
```
**NOTE:** The project is currently at ```@mdombrock/lifx-zero``` because of temporary publishing issues.

# SETUP
To get started, just require the API wrapper and set your [Auth Token](https://cloud.lifx.com/settings).

**From GIT**
```js
const lifx  =  require('./lifxWrapper');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
```
**From NPM**
```js
const lifx  =  require('api-red');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
```

# MAIN WRAPPER METHODS
# setToken()
```js
setToken(<token:string>);
```
* Token [Required] - The token you created at [https://cloud.lifx.com/settings](https://cloud.lifx.com/settings).

**Example**

```js
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
```

-------
# list()
```js
list(<selector:string>);
```
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".
**Example**

```js
//List All Lights
var list = lifx.list();
list.then(function(data){
	console.log(data);
})
//List A Specific Light
var specific = lifx.list("Overhead");
specific.then(function(data){
	console.log(data);
})
```
**Example Object**

```js
{
	id: 'd0FAKE2cFAKE',
	uuid: '0230f455-FAKE-492c-af6d-de7a922fFAKE',
	label: 'Overhead',
	connected: true,
	power: 'on',
	color: { hue: 0, saturation: 1, kelvin: 3500 },
	brightness: 0.49999237048905165,
	effect: 'OFF',
	group: { id: '0ccdFAKE2c07c5af81da4b58b523FAKE', name: 'Mats Office' },
	location: { id: '9f0f6bFAKE29ad81bfFAKEa2a69dFAKE', name: 'Home' },
	product: {
		name: 'LIFX A19',
		identifier: 'lifx_a19',
		company: 'LIFX',
		capabilities: [Object]
	},
	last_seen: '2019-06-18T12:46:47Z',
	seconds_since_seen: 2
}
```

-------
# togglePower()
```js
togglePower(<selector:string>);
```
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".
**Example**

```js
lifx.togglePower();
```

-------
# state()
```js
state(<state:object>, <selector:string>);
```
* State [Required] - A JSON object representing the new state ([https://api.developer.lifx.com/docs/set-state](https://api.developer.lifx.com/docs/set-state)).
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".
**Example**

```js
var newState = {
	"power": "on",
	"color": "blue saturation:0.5",
	"brightness": 0.5,
	"duration": 5,
}
lifx.state(newState);
```

-------
# breatheEffect()
```js
breatheEffect(<data:object>, <selector:string>);
```
* Data [Required] - A JSON object representing the breath effect you want to set ([https://api.developer.lifx.com/docs/breathe-effect](https://api.developer.lifx.com/docs/breathe-effect)).
* Selector [Optional] - The selector you want to use ([https://api.developer.lifx.com/docs/selectors](https://api.developer.lifx.com/docs/selectors)). Defaults to "all".
**Example**
```js
var newBreath = {
	"color": "blue",
	"period": 1,
	"cycles": 1,
	"persist": false,
	"power_on": true,
	"peak": 0.4
}
lifx.breatheEffect(newBreath);
```

# RETURNING DATA
This wrapper uses "promises". Here is an example of how to return the response from the light to your main app.
```js
const lifx  =  require('lifx-zero');
lifx.setToken('cf7348414176e9539b0678ab8c77b2d3c27a8a062c00094b325ce054dIAMFAKE');
//setup the promise
var newColor = lifx.state.color();
//follow through with the promise
newColor.then(function(data){
	console.log(data);
})
```

# INTERACTIVE MODE
I have created an NPM script for "Interactive Mode". This loads the wrapper module and sets your key.  
To enter "Interactive Mode" run:

**FROM GITHUB**
```bash
npm run interactive
```
**FROM NPM**
```bash
cd node_modules/lifx-zero
npm run interactive
```
**NOTE:** Make sure you create a ```.env``` file set the token value or this will not work. See ```.env.example```. If you installed this module through NPM, you will need to create the ```.env``` file inside of the ```./node_modules/lifx-zero``` subdirectory.
