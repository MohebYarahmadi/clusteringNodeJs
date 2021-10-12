// 120
const express = require('express');

const app = express();

function delay(duration) {
	const startTime = Date.now();
	while (Date.now() - startTime < duration) {
		// event loop is blocked...
	}
}

app.get('/', (req, res) => {
	res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
	delay(4000);
	res.send(`beep beep beep!: ${process.pid}`);
});

console.log('running server.js....');

console.log('worker process started');
app.listen(3000);