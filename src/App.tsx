import React from 'react';

//インターフェースで型を指定してあげるとのちに再利用もできる
interface AppProps {
  message: string;
}

//厳密に型制約することで、予期せぬデータの混入を防ぐことができる
const App = ({message}: AppProps) => {
  // console.log(props)
  // const {message} = props
  return <div>{ message }</div>;
};

export default App;
