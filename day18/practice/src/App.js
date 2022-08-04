import './reset.css'
import './App.css';
import { useState } from 'react';

const text = <span>안녕하세요</span>
const 내용 = `내용입니다 내용!`


function App() {
  const [count,setCount] = useState(0);

  return (
    <div className="App">
       <h1>H1 메인타이틀입니다</h1>
       <p className="hi">{count}</p>
       <button onClick={()=>{
        setCount(count + 1);
       }}>증가</button>
    </div>
  );
}

export default App;
