const errorHandle = (error, ctx) => {
	let status, message;
	switch (error.message) {
		default:
			status = 404;
			message = 'NOT FOUND'
	}
	ctx.status = status
	ctx.body = message
}

module.exports = errorHandle;