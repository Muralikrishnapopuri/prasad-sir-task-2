import { createContext, useState } from 'react'
import Parent from './Parent';



export const Usercontext = createContext();
const App=()=> {
  let [count,setCount] = useState(0);
  return (
    <Usercontext.Provider value={{count,setCount}}>
    <Parent/>
    </Usercontext.Provider>
  )
}

export default App
