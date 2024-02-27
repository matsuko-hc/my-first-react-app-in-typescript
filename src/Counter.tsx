import React, {useState} from 'react';

// type MySetStateAction = number | ((prevState: number) => number);
// type Dispatch = (value: MySetStateAction) => void;


const Counter: React.FunctionComponent<{}> = () => {
	const initialValue: any = 0;
	//useStateに与える型引数で全てが決まる
	const [value, setValue] = useState<number>(initialValue);

	const increment = () => {
		setValue( prevState => prevState + 1);
	}
	const decrement = () => {
		setValue( prevState => prevState - 1);
	}
	return (
		<div>
			<div>value: {value}</div>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	);
};

export default Counter;