function calculateDifference(thenString) {
	var m1 = moment(Date.now())
	var m2 = moment(new Date(thenString))
	var diff = moment.preciseDiff(m1, m2)
    return diff
}

function displayDifference() {
  displayBox.textContent = calculateDifference(dateInput.value + ", " + timeInput.value)
}

const dateInput = document.querySelector(".date")
const timeInput = document.querySelector(".time")
const displayBox = document.querySelector(".js-display-difference")
dateInput.addEventListener("change", displayDifference)
timeInput.addEventListener("change", displayDifference)
displayDifference()
setInterval(displayDifference, 1000)