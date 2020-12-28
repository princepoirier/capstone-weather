let setF = document.querySelector(`#setF`)
let setC = document.querySelector(`#setC`)

let toFahrenheit = (celcius) => {
  return celcius * 9/5 + 32
}

// Gets a qty in g, returns a formatted string in lbs,oz
let getImperialStr = (qty, withUnit=true) => {
	let tempInF = toFahrenheit(qty)  // Convert g to oz
	if (withUnit) {
		return `${Math.floor(tempInF)}&deg;<abbr title="Degrees fahrenheit" class="unit">F</abbr>`
	} else {
		return `${Math.floor(tempInF)}&deg;`
	}
	/*
	BETTER TO DO THESE WITH THE UNIT AS A VARIABLE, SINGLE RETURN?
	WHAT ABOUT IF WE DONT SET =true AND JUST USE THE NULL CASE?
	*/
}

// Gets a qty in g, returns a formatted string in lbs,oz
let getMetricStr = (qty, withUnit=true) => {
	if (withUnit) {
		return `${qty}&deg;<abbr title="Degrees celsius" class="unit">C</abbr>`
	} else {
		return `${qty}&deg;`
	}
}

let displayImperialUnits = () => {
  // Update the .switch button UI
  setC.classList.remove(`active`)
	setF.classList.add(`active`)

	document.querySelectorAll(`data`).forEach((ele) => {
		// .value needs to be set as well
		let value = ele.getAttribute(`value`)

		if (ele.matches(`.temp`)) {
			ele.innerHTML = getImperialStr(value, true)
		} else {
			ele.innerHTML = getImperialStr(value, false)
		}

		ele.setAttribute(`value`, )
	})
}

let displayMetricUnits = () => {
  // Update the .switch button UI
  setF.classList.remove(`active`)
	setC.classList.add(`active`)

	document.querySelectorAll(`data`).forEach((ele) => {
		// .value needs to be set as well
		if (ele.matches(`.temp`)) {
			ele.innerHTML = getMetricStr(ele.value, true)
		} else {
			ele.innerHTML = getMetricStr(ele.value, false)
		}
	})
}

export let createUnitToggle = (unit) => {

	if (unit === `metric`) {
		setC.classList.add(`active`)
	} else {
		setF.classList.add(`active`)
	}

  // Where will this event occur?           setF / setC
  // What type of event will it be?         `click`
	// How do we handle it, when it occurs?   displayImperialUnits / displayMetricUnits
  setF.addEventListener(`click`, displayImperialUnits)
  setC.addEventListener(`click`, displayMetricUnits)
}
