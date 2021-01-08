


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

/* linear-gradient(var(--grad-light), var(--grad-dark)) */



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