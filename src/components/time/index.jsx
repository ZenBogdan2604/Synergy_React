import styles from './style.module.css'
import React, { useState, useEffect } from 'react';

function Time() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Current time:</h1>
      <p className={styles.label_time}>{now.toLocaleTimeString()}</p>
    </div>
  );
}

export default Time;