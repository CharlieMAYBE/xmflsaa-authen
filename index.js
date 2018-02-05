import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './server/routes/graduateRoute';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.connect('mongodb://localhost:27017/xmflsaa').then(() => {
	console.log('MongoDB server connected successfully!');
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// display request 
app.use((req, res, next) => {
	console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
	next();
});

// serve static contents
app.use(express.static('./client/public'));

// routes setup
routes(app);

app.listen(PORT, () => {
	console.log(`Our server is running on port ${PORT}`);
});

module.exports = app;