import { useState } from "react";

export const useArray = (initValue) => {
    const [value, setValue] = useState(initValue);
    return {
        value,
        setValue,
        add: (atr) => setValue([...value,atr])
    };
};