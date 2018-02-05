import { 
	queryGraduate,
	// addNewGraduate, 
	// getGraduates, 
	// getGraduateWithID, 
	// updateGraduate,
	// deleteGraduate,
} from '../controllers/graduateController';

const routes = (app) => {
	app.route('/query')
		.post(queryGraduate);

	/*
	app.route('/graduate')
		.get((req, res, next) => {
			// middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			next();
		}, getGraduates)

		// POST endpoint
		.post(addNewGraduate);

	app.route('/graduate/:graduateID')
		// get specific contact
		.get(getGraduateWithID)
		// put request
		.put(updateGraduate)
		// delete request
		.delete(deleteGraduate);
	*/
};

export default routes;