import { useState, useEffect } from 'react';

export const useLocalStorage = () => {
    const [data, setData] = useState(null);
  
    const saveToLocalStorage = (key, value) => {
      setData({ key, value });
    };
  
    const getFromLocalStorage = (key) => {
      return localStorage.getItem(key);
    };
  
    useEffect(() => {
      if (data) {
        localStorage.setItem(data.key, data.value);
      }
    }, [data]);

    return [saveToLocalStorage, getFromLocalStorage];
  }
