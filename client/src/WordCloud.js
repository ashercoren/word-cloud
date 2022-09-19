import { useQuery } from '@tanstack/react-query'

import logo from './logo.svg';
import './App.css';


const buildWordStyle = (count) => ({
	fontSize: count * 10,
});

const WordCloud = () => {
	const { isLoading, error, data } = useQuery(['wordCount', 1], () =>
    	fetch('http://localhost:3002/').then(res => res.json())
  	)

	if (isLoading) {
		return <img src={logo} className="App-logo" alt="logo" />;
	}

	if (error) {
		return <div className='error'>{error?.message}</div>
	}

	return (
		<div>
			{Object.entries(data).map(([word, count]) => (
				<div className='word' key={word} style={buildWordStyle(count)}>{word}</div>
			))}
		</div>
	);
};

export default WordCloud;
