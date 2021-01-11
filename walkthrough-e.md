<!-- 
1. Creating elements 🎥
1. Arrays 🎥
1. Booleans and conditions 🎥
1. Event delegation 🎥
1. JSON: JavaScript Object Notation 🎥
1. Asynchronous data fetching 🎥
1. Module import 🎥 
-->



# Current file

<!-- *************************************** -->
1. Introduce and load the JSON file

```js
// Given a URL to a JSON file, load it asynchronously
let loadJson = async (url) => {
	let response = await fetch(url)
	return await response.json()
}

let appIsLoaded = async (event) => {
   let json = await loadJson(`data/forecast.json`)
   console.log(json)
}

// Begin the application when the application loads
window.addEventListener(`load`, appIsLoaded)
```


<!-- *************************************** -->
1. Split up files (import/export)

```js
let setCurrentWeather = (data) => {

	// Move these into the function
	let tempEle = document.querySelector(`#currTemp`)
	let highEle = document.querySelector(`#highTemp`)
	let lowEle = document.querySelector(`#lowTemp`)
	let descEle = document.querySelector(`#desc`)
	let iconSm = document.querySelector(`#iconSm`)
	let iconLg = document.querySelector(`#iconLg`)

   // ...
}

export {setCurrentWeather}
```

<!-- current.js -->
```js
import {setCurrentWeather} from './current.js'

let appIsLoaded = async (event) => {
   // ...

   // Build the current weather data
   setCurrentWeather(json)

   // ...
}
```


<!-- *************************************** -->
1. Update `data.*` to `data.current.*`
1. Update main image `alt` descriptions
1. Update metric/imperial starting point

```js
	// Current temp
	if (data.unit === "metric") {
		tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	} else if (data.unit === "imperial") {
		tempEle.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
	}
```


<!-- *************************************** -->
1. Precipitation
```css
.day {
	--grad-light:rgb(90, 154, 232);
	--grad-dark:rgb(21, 101, 162);
}
.day-precip {
	--grad-light: rgb(53, 84, 131);
	--grad-dark: rgb(51, 82, 120);
}
.night {
	--grad-light: rgb(63, 113, 205);
	--grad-dark: rgb(28, 19, 40);
}
.night-precip {
	--grad-light: rgb(45, 58, 74);
	--grad-dark: rgb(29, 38, 51);
}
body {
   /* linear-gradient(var(--grad-light), var(--grad-dark)) */
}
```
```js
	// Set the current "time" based on incoming data
	let time = data.current.time.light
	
	// Set the background gradient based on the current time
   
   // let type = data.current.condition.type
	// if (type === `rainy` || type === `sleety` || type === `snowy`) {

	let precipitation = [`rainy`, `sleety`, `snowy`]
	if (precipitation.includes(data.current.condition.type)) {
		document.body.classList.add(`${time}-precip`)
	} else {
		document.body.classList.add(time)
	}
```

-------

# Forecast

<!-- *************************************** -->
1. Iterate the ranges

```js
let buildForecastTableBody = (data) => {
   // Select the table
	let table = document.querySelector(`.ranges`)


	// Run one for each of ranges: Hourly, Tomorrow, Week
	let addForecastRange = (type, i) => { 

      // 1. Build a tbody
      // 2. Add a "tab" and button
      // 3. Build rows (forEach)
      //    1. Insert row
      //    2. 4 cells
   }

	// For each of the weather-range types
	data.forecast.ranges.forEach(addForecastRange)
}

// Build the forecast table
let setForecastWeather = (data) => {
	// Select the table

	// Build the header
	//buildForecastTableHeader(data)

	// Build the body
	buildForecastTableBody(data)
}


// DO THE BODY FIRST TO SHOW HOW INSERTCELL WORKS!!
export {setForecastWeather}
```







-------

# Units




<!-- *************************************** -->
```js
```

<!-- *************************************** -->
```js
```

<!-- *************************************** -->
```js
```

<!-- *************************************** -->
```js
```

<!-- *************************************** -->
```js
```

<!-- *************************************** -->
```js
	// Dynamically set the page title with the city name
	document.title = `Weatherful weather for ${data.location}`
```









```css

.range {
	display: none;
	/* font-size: 1.25rem; */
}
.range.active {
	display: table-row-group;
}
.ranges th:nth-child(1) {
	width: 30%;
}

/* MODAL */
/* .modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.9);
	font-size: 2rem; */
	/* --- */
	/* display: none; */
	/* --- */
	/* display: flex;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s; */
	/* --- */
	/* justify-content: center;
	align-items: center; */
	/* --- */
/* } */
/* .modal.show { */
	/* --- */
	/* display: flex; */
	/* --- */
	/* opacity: 1; */
	/* --- */
/* } */
```
