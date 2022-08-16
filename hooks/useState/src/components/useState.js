import { useState } from "react"

const UseState = () => {

  const initialValue = () => {
    let total = 0
    for (let i = 0; i < 5; i++) {
      total += i
    }
    console.log('re-render in initial value', total)
    console.log('---------------------')
    return total
  }

  const [count, setCount] = useState(() => initialValue())

  const handleCount = () => {
    console.log('re-render in handleCount')
    console.log('------------------')
    return setCount(count + 1)
  }

  return (
    <>
      <h1 style={{ background: 'red' }} onClick={ handleCount }>{ count }</h1>

    </>
  )
}

export default UseState