import React, {useEffect,useRef,useState} from 'react';
//コンポーネントがレンダリングされたら丸っと関数を実行してくれる機能→useEffect

// type MySetStateAction = number | ((prevState: number) => number);
// type Dispatch = (value: MySetStateAction) => void;

// const array: Array<number> = [1,2,3];
// const readonlyArray: ReadonlyArray<number> = [1,2,3];
// array[0] = 11
// readonlyArray[0] = 11

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

	const renderTimes = useRef<number>(0)
	useEffect(()=>{
		renderTimes.current = renderTimes.current +1
	})

	const ref = useRef<HTMLInputElement>(null!)
	//null!で、その直前のデータはnull型じゃないよ！ということをtypescriptのコンパイラに明示的に伝える。
	const focusInput = () => {
		ref.current.focus();
		// const current = ref.current;
		// if (current != null) {
		// 	current.focus();
		// }
	}
	return (
		<div>
			<div>value: {value}</div>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
			<div>This component was rerendered{renderTimes.current} times</div>
			<input ref={ref} type="text" />
			<button onClick={focusInput}>Click!</button>
		</div>
	);
};

export default Counter;