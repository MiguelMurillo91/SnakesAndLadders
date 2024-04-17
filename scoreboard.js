const url =
	"https://code.schoolofdesign.ca/api/endpoint/miguelandres.murillorozo@georgebrown.ca/snakesandladders/scores";
const options = { method: "GET" };

async function fetchData() {
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		displayData(data.results);
	} catch (error) {
		console.error(error);
	}
}

function displayData(results) {
	const tableBody = document.querySelector("#scoreTable tbody");
	tableBody.innerHTML = "";

	results.forEach((player) => {
		const row = document.createElement("tr");
		row.innerHTML = `
      <td>${player.name}</td>
      <td class="normal-font">${player.score}</td>
    `;
		tableBody.appendChild(row);
	});
}

fetchData();
