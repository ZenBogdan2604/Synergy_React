import { useState } from 'react';

const TestApi = () => {
    const [team] = useState();

    const getData = () => {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b0410adb7mshae259349c2a4a72p15effbjsne5863ca9858a',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};
          
   fetch(url, options)
      .then(res => res.json())
      .then(res => console.log(res));
    }

    console.log(team);

    return(
        <div>
  <button type='submit' onClick={getData}>Зарегистрироваться</button>

        </div>
    )
};
export default TestApi;