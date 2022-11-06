import React from 'react'
import useCounter from '../useCounter';
const Home = () => {
  const { value, setvalue, increment, decrement, reset } = useCounter(0);

  const handleDouble = () => {
    setvalue(value*2);
  };
  return (
    <div className="home">
    <h1>Counter Application built with a custom hook</h1>
    <h2>{value}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    <button onClick={handleDouble}>Double</button>
  </div>
  )
}

export default Home