import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]= useState([])
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setUsers(data))
    },[])
    return(
        <div>
<h2>users:{users.length}</h2>
        </div>
    )
}

/**
 * 1 dicleare a state to hold data
 * 2 useEfect with callback array
 * 3 use fetch
 * 4 set lodded data to stete
 * 5 display data
 */