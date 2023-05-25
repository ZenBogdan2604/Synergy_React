import { useState } from 'react';
import { useLocalStorage } from "../../hook/useLocalStorage"
import { useTeam } from "../hook/useTeam";

const TestApi = () => {
    const team = useTeam();

    console.log(team);

    return(
        <div>
            {team.map((el, i) => {
                return (
                    <div key={i}>
                        {i + 1} {el.abbreviation}-{el.city}
                    </div>
                );
            })}
        </div>
    );
};

export default TestApi;