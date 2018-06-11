const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const smtpTransport = require('nodemailer-smtp-transport');
const ics = require('ics-creator');
const queue = [];
var transporter;

const noop = () => {};
const queueHandler = () => {
	const t = queue.shift();
	if (t) {
		if (!t.data.icalEvent && !!t.data.ics) {
			t.data.icalEvent = ics.createNodemailerEvent(t.data.ics)
		}

		transporter.sendMail(t.data, function (err, res) {
			if (err) console.error(err, t);
			t.callback(err);
		});
	}
};

setInterval(queueHandler, 200);
 
module.exports = function init (config, force) {
  transporter = (!!force
    ? nodemailer.createTransport(smtpTransport(config))
    : transporter || nodemailer.createTransport(smtpTransport(config))
  )
	transporter.use('compile', htmlToText())
	return function addToQueue(a) {
		var callback = a.callback || noop;
		queue.push({data: a, callback: callback});
	};
}
