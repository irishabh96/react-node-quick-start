module.exports = {
	notFound: (res) => (entity) => {
		if (entity) {
			return entity;
		}
		res.status(404).end();
		return null;
	},
	success: (res, status) => (entity) => {
		if (entity) {
			console.log(entity);
			res.status(status || 200).json(entity);
		}
		return null;
	}
};
