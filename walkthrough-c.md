1. Show the browser first, review with dev tools on
2. Browser preview will be less useful


```css

/* FLEX STUFF */

/* ---- header */
.units {
	display: flex;
}
.header { /* put above!! */
	display: flex;
	justify-content: space-between;
}
.logo {
   margin: 1rem 1rem 1rem 0; /* margin-right */
   display: block; /* unnecessary, but mention it */
}


/* ---- current */
.high-low li {
	display: inline;  /* could also use a flex */
}
.temp {
	display: block;
}

/* ---- forecast */
.tabs {
	display: flex;
	justify-content: space-around;
}
.ranges {
   width: 100%;
}



/* RESTRICT CONTAINER WIDTH */
.container {
   width: 100%;
   max-width: 70rem;
	margin: 0 auto;
	/* padding: 0 1rem; */
}
* {
	box-sizing: border-box;
}


/* RESPONSIVE */
@media screen and (min-width: 50rem) {
   /* IN ORDER... */
   .weather {
		display: flex;
   }
   .current {
		max-width: none; /* do the <picture> first! */
		flex-grow: 1;
		margin-right: 2rem;
   }
   .ranges {
		min-width: 25rem;
	}
}



/* THE PICTURE (<picture>) ELEMENT */
.current {
	max-width: 20rem;
	margin: 0 auto;
}



/* BUTTON STATES */
.btn:hover, .btn:focus {
	background-color: var(--shade-white);
}
.btn:focus {
	border: 3px solid var(--col-b);
	outline: none;
}
.btn.active {
	background-color: transparent;
	/* border-color: var(--col-a);
	font-weight: 700; */
}



/* FULL HEIGHT FOOTER (use zoom-out) */
html {
   height: 100%;
}
body {
   height: 100%;
}
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100%;
}
.weather {
	flex-grow: 1;
}

@media screen and (min-width: 50rem) {
/*************** FOOTER ***************/
	.footer {
		padding: 1rem 0; /* cleans bottom 2rem */
		line-height: 1;
	}
	.footer-group {
		display: flex;
		justify-content: space-between;
	}
} 



/* TOUCHUPS */


/* FORECAST TABLE */
.ranges {
   /* background-color: var(--shade-dark); */
   width: 100%;
   padding: 1rem;
   /* border-radius: 0.5rem; */
   /* margin: 1rem 0; */
   border-spacing: 0;
      /* In lessons we used `border-collapse: collapse;`, but makes it lose padding here! */
}

.range tr:hover {
	background-color: var(--shade-dark);
}



html {
	background-color: rgb(90, 154, 232);
}
body {
   background-image:
		repeating-linear-gradient(
			45deg,
			rgba(255,255,255,0.03),
			rgba(255,255,255,0.03) 1px,
			transparent 2px,
			transparent 4px
		),
      linear-gradient(rgb(90, 154, 232), rgb(21, 101, 162));
}
.current::after {
	content: "";
	display: block;
	background-image: url('../img/squiggly-line.svg');
	background-position: center center;
	background-repeat: no-repeat;
	height: 1rem;
	margin: 2rem 0;
}
```