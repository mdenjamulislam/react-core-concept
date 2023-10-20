import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid red',
        margin: '10px 0',
        borderRadius: '10px',
        padding: '20px'
    }
    
    const btnStyle = {
        padding: '6px 12px',
        border: '1px solid red',
        borderRadius: '5px',
        backgroundColor: 'red',
        color: '#fff',
        outline: 'none'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>

            <button style={btnStyle} onClick={handleAdd}>Add</button>
        </div>
    )
}