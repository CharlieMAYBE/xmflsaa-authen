import mongoose from 'mongoose';

export const GraduateSchema = mongoose.Schema({
	basic: {
		year: { type: Number, required: true },
		name: { type: String, required: true },
		gender: { type: String, required: true },
		birthday: String
	},
	contact: {
		phone: String,
		address: String,
		email: String,
		qq: String,
		wechat: String
	},
	occupation: {
		isEmployed: { type: Boolean, required: true },
		industry: String,
		company: String,
		department: String,
		title: String,
	},
	education: {
		university: String,
		school: String,
		major: String,
	},
	passport: {
		pseudoCode: String,
		passportNumber: String,
		isGiven: { type: Boolean, required: true }
	},
	involvement: {
		serviceHour: Number,
		donation: Number,
		serviceActivity: [{ name: String, hour: Number }],
		attendActivity: [{ name: String }],
		score: { type: Number, required: true }
	}
}, { timestamps: true });
