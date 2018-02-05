$(document).ready(() => {
	$('form').submit((err) => {
		err.preventDefault();

		if ($('#name').val() && $('#year').val()) {
			$.post('/query', {name: $('#name').val(), year: $('#year').val()}, printAlumni);
		}
	}); 
});

function printAlumni(res) {
	$('body>dl').empty();
	if (res === 'No record found!') {
		$('<p>').text('会员系统查无此人').appendTo('body>dl');
	}
	else {
		res.forEach((item) => {
			let msg = item.basic.name + '，' + item.basic.gender + '，' +  item.basic.year + '届校友，厦外人护照号' + item.passport.passportNumber + '，累积捐款' + item.involvement.donation + '元，服务时间' + item.involvement.serviceHour + '小时。';
			$('<dt>').text(msg).appendTo('body>dl');
		});
	}
}