import { useEffect, useState } from "react";
import styles from './style.module.css'

const Test = () => {
const [team, setTeam] = useState([])

useEffect(() => {
    const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b0410adb7mshae259349c2a4a72p15effbjsne5863ca9858a',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

fetch(url, options)
.then((response) => response.json())
.then((response) => setTeam(response.data));
}, []);

    return (
        <div className={styles.container}>
            <div className={styles.label_team}>Команды</div>
            <div>
                {team.map(el => {
                    return <div key={el.id}> {el.city}</div>
                })}
            </div>
        </div>
    )
}

export default Test;