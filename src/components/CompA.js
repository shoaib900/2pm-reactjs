import React,{memo} from 'react'

const CompA = (props) => {
  const {value,changeValue} = props;

  console.log("child rendered")
  return (
    <div>
      <h1>component A</h1>
      <button onClick={changeValue}>change the value</button>

      <p>{value}</p>
      
    </div>
  )
}

export default memo(CompA)
