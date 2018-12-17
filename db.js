const mongoose = require('mongoose')
mongoose.connect(
	`mongodb://${process.env.DB_USER}:${
		process.env.DB_PASS
	}@ds125392.mlab.com:25392/lekhachitr`,
	{ useNewUrlParser: true }
)
