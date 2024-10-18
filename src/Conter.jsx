import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const hendelAdd=()=>{
        const newCount = count+1;
        setCount(newCount)
    }
    const hendelRediuse =()=>{
        const newCount = count-1;
        setCount(newCount)
    }
    return (
        <div>
            <h1>counter:{count} </h1>
            <button onClick={hendelAdd}>add</button>
            <button onClick={hendelRediuse}>reduse</button>

        </div>
    )
}

