import React from 'react';
import useCounterStore from '../stores/counter';

export default function Counter() {
	const counter = useCounterStore(state => state)

	return (
		<div>
			<h1>Count is {counter.count}</h1>
			<button onClick={() => counter.increaseByN(10)}>+10</button>
			<button onClick={counter.increase}>+</button>
			<button onClick={counter.reset}>0</button>
			<button onClick={counter.decrease}>-</button>
			<button onClick={() => counter.increaseByN(-10)}>-10</button>
		</div>
	);
}
