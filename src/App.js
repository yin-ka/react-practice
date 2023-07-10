import React, {useState} from 'react'
function App () {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount(count-1);
  };
    return (
    <div className="App">
      <h1>Welcome to my counter App</h1>
      <p>The count is : {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increament}>+</button>
    </div>
  );
};

export default App;
