const axios = require('axios');
const { parse } = require('node-html-parser');

const CHUNK_SIZE = 5;

const range = (n) => Array.from(Array(n).keys()); 

const getWords = async () => {
	const { data } = await axios.get('https://www.classnamer.org/');
	return parse(data)?.querySelector('#classname')?.innerHTML?.split('<wbr>') || [];
};

const getWordCount = async (iterations) => {
	const res = {};
	for (let i = 0; i < iterations; i += CHUNK_SIZE) {
		const chunks = await Promise.all(range(CHUNK_SIZE).map(getWords));
		for (chunk of chunks) {
			for (word of chunk) {
				res[word] = (res[word] || 0) + 1;
			}
		}
	}
	return res;
};

module.exports = {
	getWordCount,
};
