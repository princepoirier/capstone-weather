// Setup the current weather UI given the supplied data
export let setCurrentWeather = (data) => {

	// Select document elements
	let iconSm = document.querySelector(`.icon-sm`)
	let iconLg = document.querySelector(`.icon-lg`)
	let desc = document.querySelector(`.desc`)
	let temp = document.querySelector(`.temp`)
	let high = document.querySelector(`.high`)
	let low = document.querySelector(`.low`)
	// document.body

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

	// Condition image (large)
	iconLg.setAttribute(`srcset`, `img/${time}-${data.current.condition.type}-lg.svg`)

	// Condition image (small)
	iconSm.setAttribute(`src`, `img/${time}-${data.current.condition.type}-sm.svg`)
	iconSm.setAttribute(`alt`, data.current.condition.desc)

	// Assign the weather description
	desc.textContent = data.current.condition.desc

	// TODO: Explain the different between textContent and innerHTML
	// TODO: Option + shift + 8 = °,   Windows: Alt + 0176
	// Current temp
	if (data.unit === "metric") {
		temp.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	} else if (data.unit === "imperial") {
		temp.innerHTML = `${data.current.temp}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
	}
	temp.setAttribute(`value`, data.current.temp)

	// Daily high
	high.innerHTML = `${data.current.high}&deg;`
	high.setAttribute(`value`, data.current.high)

	// Daily low
	low.innerHTML = `${data.current.low}&deg;`
	low.setAttribute(`value`, data.current.low)

}
