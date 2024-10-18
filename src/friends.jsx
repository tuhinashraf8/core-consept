import { useEffect, useState } from "react"
import Friend11 from "./friend"

export default function Friends(){
    const [Friend, setFriend]=useState([])
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setFriend(data))
    },[])
    return(
        <div>
<h2>friend:{Friend.length} </h2>
{
    Friend.map(frnd => <Friend11 frnd={frnd}></Friend11>)
}
        </div>
    )
}