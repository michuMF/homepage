const numbers = document.querySelectorAll(".numbers");
const category = document.querySelectorAll(".category");
const icon = document.querySelectorAll(".icon");
console.log(icon[0].src);

fetch("data.json")
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < numbers.length; i++) {
			numbers[i].firstChild.textContent = data[i].score;
			category[i].firstChild.textContent = data[i].category;
			icon[i].src = data[i].icon;
		}
	})

	.catch(error => console.error(error));
