import React from 'react';

//インターフェースで型を指定してあげるとのちに再利用もできる
interface AppProps {
  message?: string;
}

//厳密に型制約することで、予期せぬデータの混入を防ぐことができる
//functionコンポーネントに対する型制約(アノテーション)。きちんと関数に対して制約してあげないと正しくエラーが出ない
//コンポーネントという型を持つ関数。型はreactから提供されている
const App: React.FunctionComponent<AppProps> = ({message}) => {
  // console.log(props)
  // const {message} = props
  return <div>{ message }</div>;
};

App.defaultProps = {
  message: 'Hello matterprot',
  // description: 'This is matterport project',
}
export default App;


