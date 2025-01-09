'use client';
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')
  const handleCount = (operation = 'add') =>{
    setError('')
    if (operation === 'add'){
      if (count === 15){
        setError('Max count reatched')
        return;
      }
      setCount(count + 1)
      return;
    } if (operation === 'subs'){
      if(count === 0){
        setError('Min count reatched')
        return;
      }
      setCount(count - 1)
      return;
    }
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 style={{color:'green'}}>Counter roules📋: </h2>
        <p>- You cannot add more than 15</p>
        <p>- You cannot subtract less than 0</p>
      <Stack spacing={2} direction="row" alignItems={'center'}>
        <Button variant="text" size={'large'} onClick={() => handleCount('subs')}>-</Button>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <Button variant="text" size={'large'} onClick={() => handleCount()}>+</Button>
      </Stack>
      <Button variant="text" size={'large'} onClick={() => { setCount(0); setError('')}}>RESET</Button>
      {error && <p style={{color:'#FF4336'}}>{error}</p>}
      </main>
    </div>
  );
}
