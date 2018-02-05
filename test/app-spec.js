var request = require('supertest');
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../index');

describe('XMFLSAA App', () => {
	it('Loads the home page', (done) => {
		request(app).get('/').expect(200).end(done);
	});
});
