var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", function () {
	console.log(`Connected to ${db.name} MongoDB at ${db.host}:${db.port}`);
});



//database URI is hidden and its a variable MONGO which is then connected to database.js using process.env.MONGO