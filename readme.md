# Weather (design only)

## Presentation

- "Now we will", think of it like a slide with points
- Get clean screenshots of the design ahead of time - put in the folder?
- Guiding with comments in place already?




## Questions

- "Weather Logo" (replacing the "search", looked naked without it)
- Hold the header (logo and units) to the same max width as the rest of the content in large screens?
- Graphic have two versions for the main part `lg` vs `sm`. Problem is that the browser won't swap SVGs with srcset based on the size, but SVGs are already efficient. Any other means would be new material (and also not "clean" or simple). Do we *need* two different images?
- Check all viewport widths and comment if problematic
      - Too little margin (buffer space from content to viewport edge) left/right between widths 640px and 1120px specifically? What about mobile (< 640px)
- FYI: Need the white squiggle graphic (will ask Nat), put in a black one as a placeholder
- There was no definition for `:hover` states, I put a few in (buttons/tabs, rows in the table), but if you have any direction, please provide
- Abbreviations on "PoP", "Temp" and "C"/"F" - useful or needless? (Or indifferent)
- `Roboto, helvetica, arial, sans-serif` being used here, please confirm Roboto as primary over `HelveticaNeue`
- We need an informal API document to provide/show, or a JSON of this many values just might seem confusing
- Does the current "time" have to be the real time (user computer)? Or fine to put that in the JSON (as is currently being done)?
- Should I make additional docs for multiple "cities" (data files)? If so, any specific way you want them switched? (Or just users can try it manually? Think about what that looks/feels like - does it feel cheap?)
      - If not, how are we showing day/night and different conditions? Or who cares?
      - Should I just position this again as "an example of what a REAL dataset might look?"
- Fine to define "day" as 8am-8pm? Keep in mind daylight savings, and people in cities with more/less day/night
- Is "Current conditions" supposed to be replaced with the condition description, ie "Clear skies in Toronto, ON"?
- Having a high/low for days of the week makes the code more complex, can we leave that out and just have a single temp?
- Is the column width change on the "Tomorrow" tab distracting? Or fine?
- The tabs on the "forecast" are not spread to the ends (ie, `space-evenly` on the mobile view, rather than `space-between`), as per the design. Should they be spread full width?


## Gradients

There are 4 separate background gradients to use. Below is the logic for when to choose what gradient to use.

1. daytime clear conditions includes:
   - clear
   - windy
   - partlycloudy

   use background gradient called "background_gradient":
   - `rgb(90, 154, 232)`
   - `rgb(21, 101, 162)`


2. daytime precipitation conditions include:
	- cloudy
	- rainy
	- sleety
	- snowy
	- foggy

   use background gradient called "background_gradient_precip"
   - `rgb(51, 82, 120)`
   - `rgb(53, 84, 131)`


3. nighttime clear conditions includes:
	- clear
	- windy
	- partlycloudy

   use background gradient called "background_gradient_night"
   - `rgb(63, 113, 205)`
   - `rgb(28, 19, 40)`


4. nighttime precipitation conditions include:
	- cloudy
	- rainy
	- sleety
	- snowy
	- foggy

   use background gradient called "background_gradient_precip_night"
   - `rgb(45, 58, 74)`
   - `rgb(29, 38, 51)`



