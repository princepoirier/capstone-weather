Welcome back to our Weatherful Weather application development series...

In this lesson...
- Setting up the current weather using some sample data, structured as an object
   - Selecting elements and then manipulating them using their properties and methods
- Then, converting the temperature between units, celsius and fahrenheit
   - Utilizing event listeners, functions, and applying other javascript concepts from our lessons so far.

So if you're ready, let's dive into our code...


# Current temp

<!-- *************************************** -->
1. Attach JS


<!-- *************************************** -->
2. Bring in sample dataset
```js
let current = {
	time: {
		hour: 14,
		minute: 25,
		light: "day"
	},
	condition: {
		desc: "Get your shovels ready, Toronto. Today it's going to snow!",
		type: "snow"
	},
	temp: 0,
	high: 3,
	low: -1
}
```


<!-- *************************************** -->
3. Empty out the HTML content (don't forget `value`)


<!-- *************************************** -->
4. Create `setCurrentWeather`, will parse our live data

```js
let setCurrentWeather = (data) => {

}
setCurrentWeather(current)
```


<!-- *************************************** -->
5. Selectors
```js
let tempEle = document.querySelector(`#currTemp`)
let highEle = document.querySelector(`#highTemp`)
let lowEle = document.querySelector(`#lowTemp`)
```


<!-- *************************************** -->
6. Set values

```js
// TODO: Explain the different between textContent and innerHTML
// TODO: Option + shift + 8 = °,   Windows: Alt + 0176
// Current temp
tempEle.innerHTML = `${data.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>` //! HERE
tempEle.setAttribute(`value`, data.temp)

// Daily high
highEle.innerHTML = `${data.high}&deg;`
highEle.setAttribute(`value`, data.high)

// Daily low
lowEle.innerHTML = `${data.low}&deg;`
lowEle.setAttribute(`value`, data.low)
```


<!-- *************************************** -->
7. Condition 

```js
let desc = document.querySelector(`#desc`)

// Assign the weather description
desc.textContent = data.condition.desc
```

<!-- *************************************** -->
8. Images

```js
let iconSm = document.querySelector(`#iconSm`)
let iconLg = document.querySelector(`#iconLg`)

// Condition image (large)
// iconLg.setAttribute(`srcset`, `img/day-snow-lg.svg`)
iconLg.setAttribute(`srcset`, `img/${data.time.light}-${data.condition.type}-lg.svg`)

// Condition image (small)
iconSm.setAttribute(`src`, `img/${data.time.light}-${data.condition.type}-sm.svg`)
iconSm.setAttribute(`alt`, data.condition.desc)
```


----


# Conversion


<!-- *************************************** -->
1. Add ids and selectors

```js
// Select the unit buttons
let setF = document.querySelector(`#setF`)
let setC = document.querySelector(`#setC`)

setC.classList.add(`active`)
```

<!-- *************************************** -->
3. Add event listeners

```js
let displayMetricUnits = () => {
}
let displayImperialUnits = () => {
}

setC.addEventListener(`click`, displayMetricUnits)
setF.addEventListener(`click`, displayImperialUnits)
```

<!-- *************************************** -->
4. Swap actives to test out the functions...

```js
let displayMetricUnits = () => {
   setF.classList.remove(`active`)
	setC.classList.add(`active`)
}
let displayImperialUnits = () => {
   setC.classList.remove(`active`)
	setF.classList.add(`active`)
}
```

<!-- *************************************** -->
5. Convert the main unit

```js
let displayImperialUnits = () => {
   setC.classList.remove(`active`)
	setF.classList.add(`active`)

   let currValue = tempEle.getAttribute(`value`)
   let newValue = currValue * 9/5 + 32

   tempEle.setAttribute(`value`, newValue)
   tempEle.innerHTML = `${Math.round(newValue)}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
}
```
**PROBLEM**  We have to repeat this for each temp! (too many with table)


<!-- *************************************** -->
6. Create a function to do this...

```js
let toFahrenheit = (celsius) => {
  return celsius * 9/5 + 32
}
let setTempToUnit = (ele) {                        ///// HERE FIRST
   let currValue = ele.getAttribute(`value`)
   let newValue = toFahrenheit(currValue)  /// NOW THE FUNCTION

   ele.setAttribute(`value`, newValue)
   ele.innerHTML = `${Math.round(newValue)}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
}
let displayImperialUnits = () => {
   setC.classList.remove(`active`)
   setF.classList.add(`active`)
   setTempToUnit(tempEle)
   setTempToUnit(highEle)
   setTempToUnit(lowEle)
}
```
**PROBLEM**  What about back to celsius?  (Nevermind the unit on the end for now.)
"We *could* just have two functions for this..."

<!-- *************************************** -->
1. Show that function can be passed...

```js
let setTempToUnit = (ele, toUnit) {                        ///// HERE FIRST
   //...
   let newValue = toUnit(currValue)  /// NOW THE FUNCTION
   //...
}
let displayImperialUnits = () => {
   // ...
   setTempToUnit(tempEle, toFahrenheit)
   setTempToUnit(highEle, toFahrenheit)
   setTempToUnit(lowEle, toFahrenheit)
}
```


<!-- *************************************** -->
8. Now do it for C

```js
// Convert from F to C
let toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5/9
}
//...
```


<!-- *************************************** -->
9. Move the tail to the outside.

```js
let setTempToUnit = (ele, toUnit, unit=``) => {  // Default param
   //...
   ele.innerHTML = `${Math.round(newValue)}&deg;${unit}`
}

let displayMetricUnits = () => {  // FOR EXAMPLE
	setTempToUnit(tempEle, toCelsius, `<abbr title="Degrees celsius" class="unit">C</abbr>`)
	setTempToUnit(highEle, toCelsius)
	setTempToUnit(lowEle, toCelsius)
}
```


<!-- *************************************** -->
10. Remove listeners to avoid accumulation

```js
let displayMetricUnits = () => {
	setF.classList.remove(`active`)
	setC.classList.add(`active`)
	setC.removeEventListener(`click`, displayMetricUnits)
   setF.addEventListener(`click`, displayImperialUnits)
   // ...
}
let displayImperialUnits = () => {
	setC.classList.remove(`active`)
	setF.classList.add(`active`)
	setF.removeEventListener(`click`, displayImperialUnits)
   setC.addEventListener(`click`, displayMetricUnits)
   // ...
}


