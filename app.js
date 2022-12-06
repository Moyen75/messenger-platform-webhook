const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

// init to make .env variables available in this file(server.js)
dotenv.config();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api", require("./api/status"))
app.use("/api", require("./api/webhook"))


app.get("/status", (req, res, next) => {
	res.status(200).json("OK")
})

app.listen(PORT, () =>
	console.log(
		`Server running on port ${PORT} in ${process.env.NODE_ENV} mode...`
	)
);
