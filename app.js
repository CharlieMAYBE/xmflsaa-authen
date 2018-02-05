import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
let graduates = require('./database/graduate.json');

function memberFinder(nameToFind, yearToFind) {
	let memberFound = graduates.filter((item) => {
		return item.basic.name === nameToFind && item.basic.year === Number(yearToFind);
	});
	return memberFound;
}

// bodyPaser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static('./client/public'));

app.use(cors());

app.post('/alumni-query', (req, res) => {
	if (memberFinder(req.body.name, req.body.year).length > 0) {
		//console.log(memberFinder(req.body.name, req.body.year));
		res.json(memberFinder(req.body.name, req.body.year));
	} 
	else {
		res.send('No record found!');
	}
});

app.listen(PORT, () => {
	console.log(`Our server is running on port ${PORT}`);
});
