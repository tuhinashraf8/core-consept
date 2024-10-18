import { useState } from "react"

export default function Team(){
const [team, setTeam]=useState(11)
const addHendelar =()=>{
    const newPlayer = team +1;
    setTeam(newPlayer)
    // ai vabeo deya jay setTesam(team +1)
}
const addHendelar2 =()=>{
    const newPlayer = team-1;
    setTeam(newPlayer)
}
    return(
        <div>
            <h3>Players: {team}</h3>
            <button onClick={addHendelar}>add players</button>
            <button onClick={addHendelar2}>remove players</button>
        </div>
    )
}