import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// type  Foo =  JSX.IntrinsicAttributes;

//renderメソッドは第二引数を第一引数で置き換えるメソッド
ReactDOM.render(<App message="メッセージ"/>, document.getElementById('root'));
