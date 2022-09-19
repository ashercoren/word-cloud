const service = require('./wordCount.service');

const DEFAULT_ITERATIONS = 100;

const getWordCount = async (req, res, next) => {
	const {
		params: { iterations = DEFAULT_ITERATIONS },
	} = req;
	try {
		const wordCount = await service.getWordCount(parseInt(iterations, 10));
		res.json(wordCount);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getWordCount,
};
