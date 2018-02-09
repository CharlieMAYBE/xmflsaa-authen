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
			let one = (item.passport.isGiven === true) ? '已领取':'未领取';
			$('<dt>').text(item.basic.name + ' ' + item.basic.gender + ' ' +  item.basic.year + '届校友').appendTo('body>dl');
			$('<dt>').text(one + '厦外人护照 编号：' + item.passport.passportNumber).appendTo('body>dl');
			$('<dt>').text('服务时间: ' + item.involvement.serviceHour + '小时').appendTo('body>dl');
			$('<dt>').text('累积捐款: ' + item.involvement.donation + '元').appendTo('body>dl');
		});
	}
}