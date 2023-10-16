import React,{useState,useCallback} from 'react'
import CompA from '../components/CompA'

const Home = () => {
  const [number,setNumber] = useState(0);
  const [value,setValue] = useState(100);

  const increment =() => {
    setNumber(number + 1);
  }

  const decrement = () => {
    setNumber(number -1 )
  }
  console.log("parent rendered")

  // useCallback( ()=> {},[])

  const changeValue = useCallback( () => {
    setValue(value + 50);
  } )

  // const changeValue = () => {
  //   setValue(value + 50);
  // }

  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>{number}</p>
      <button onClick={decrement}>decrement</button>

      <CompA value={value} changeValue={changeValue} />
      
    </div>
  )
}

export default Home
