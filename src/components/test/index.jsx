import { useEffect, useState } from "react";
import styles from './style.module.css'

const Test = () => {
const [teamData, setTeamData] = useState([]);
const [isLoad, setIsLoad] = useState(true);

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
.then((res) => res.json())
.then((res) => {
    setTeamData(res.data);
    setIsLoad(false);
    });
}, []);

    return (
        <div className={styles.container}>
            <div className={styles.label_team}>Команды</div>
            <div>
                {teamData.map((el, i) => {
                    return (
                    <div key={el.id}>
                        {i + 1}. {el.abbreviation} {el.city}
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fru%2Ffree-icon%2Frubbish-bin_1483063&psig=AOvVaw1Lzd2rNqMMHLBXBlaPabhO&ust=1686233697426000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjYo5assf8CFQAAAAAdAAAAABAE"
                        onClick={() => {
                            setTeamData(
                                teamData.filter(
                                    (filterElement) => el.id !== filterElement.id
                                )
                            );
                        }}/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Test;