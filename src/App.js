// import { useState } from "react"
import React from 'react'
import Nav from './nav' //para sa components
import './App.css' //para naman sa css





const App = () => {


    // const [count, setCount] = useState(0) // default value ng naunang element
    // const [user, setUser] = useState('')

    // const addition = () => {
    //     setCount(count + 1)
    // }

    // const Onchange = (e) => {
    //     setUser(e.target.value)

    // }


    return (
        // <div>
        //     <h1>Count: {count}</h1>
        //     <button onClick={addition}>Magbilang</button>
        //     <br />
        //     <input onChange={Onchange} value={user} />

        <div className='app-Main'>
            <Nav />
            <Nav />
            <Nav />
            <Nav />
            
        </div>
        // </div>

    )


}
export default App