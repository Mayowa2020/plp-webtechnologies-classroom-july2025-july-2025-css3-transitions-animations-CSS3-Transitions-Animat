// ======================
// PART 2: JS FUNCTIONS
// ======================

// Global variable (used to demo scope)
let globalColor = "#fd6c63";

/**
 * Generates a random hex color string.
 * Demonstrates parameters, return value, and local scope.
 * @param {string} baseColor - (optional) base color to use if any.
 * @returns {string} - A random hex color string.
 */
function getRandomColor(baseColor = "") {
	// "baseColor" is local to this function
	if (baseColor) return baseColor;
	let hex = "#";
	for (let i = 0; i < 6; i++) {
		hex += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
	}
	return hex;
}

/**
 * Applies a new background color to a target element.
 * Demonstrates function with parameter and usage of global variable.
 * @param {HTMLElement} el - DOM element to update
 * @param {string} color - color value
 */
function applyBoxColor(el, color) {
	el.style.background = color;
	// update global to show effect of global variable mutation
	globalColor = color;
}

// Used to trigger color calculation and display result
document.getElementById("calc-btn").addEventListener("click", function () {
	// Use getRandomColor and applyBoxColor to show function re-use
	const color = getRandomColor();
	document.getElementById("calc-result").innerText =
		"Generated color: " + color;
	const box = document.querySelector(".animated-box");
	applyBoxColor(box, color);
});

// ===============================
// PART 3: JS TRIGGERS CSS ANIMATION
// ===============================

// Flipping the card using class toggle & animation
const card = document.getElementById("flip-card");
let isFlipped = false;
document
	.getElementById("animate-trigger")
	.addEventListener("click", function () {
		// Use a function for reusable logic
		flipCard(card);
	});

/**
 * Flips the card.
 * Demonstrates return, scope, and class manipulation.
 * @param {HTMLElement} cardEl
 * @returns {boolean} - true if card is now flipped, false otherwise
 */
function flipCard(cardEl) {
	isFlipped = !isFlipped;
	cardEl.classList.toggle("flipped", isFlipped);
	// Optionally do more, e.g. play a sound or trigger another effect
	return isFlipped;
}

