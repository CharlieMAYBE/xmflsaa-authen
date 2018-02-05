import mongoose from 'mongoose';
import { GraduateSchema } from '../models/graduateModel.js';

let Graduate = mongoose.model('Graduate', GraduateSchema);

export const queryGraduate = (req, res) => {
	Graduate.find({ 'basic.name': req.body.name, 'basic.year': Number(req.body.year) }, (err, grad) => {
		if (err) res.send(err);
		if (grad.length > 0) {
			res.json(grad);
		}
		else {
			res.send('No record found!');
		}
	});
};

/*
export const addNewGraduate = (req, res) => {
	let newGraduate = new Graduate(req.body);

	newGraduate.save((err, grad) => {
		if (err) res.send(err);
		res.json(grad);
	});
};

export const getGraduates = (req, res) => {
	Graduate.find({}, (err, grad) => {
		if (err) res.send(err);
		res.json(grad);
	});
};

export const getGraduateWithID = (req, res) => {
	Graduate.findById(req.params.graduateId, (err, grad) => {
		if (err) res.send(err);
		res.json(grad);
	});
};

export const updateGraduate = (req, res) => {
	Graduate.findOneAndUpdate({ _id: req.params.graduateId}, req.body, { new: true }, (err, grad) => {
		if (err) res.send(err);
		res.json(grad);
	});
};	

export const deleteGraduate = (req, res) => {
	Graduate.remove({ _id: req.params.graduateId }, (err) => {
		if (err) res.send(err);
		res.json({ message: 'Graduate successfully deleted!'});
	});
};
*/
