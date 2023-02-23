import React from 'react'
import { makeStyles } from '@mui/material';
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
  btn: {
    border: 'none',
    margin: 20,
    width: 250,
    height: 65,
    borderRadius: 6,
    textTransform: 'uppercase',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: '200%',
    transition: '0.4s',
    '&:hover': {
      backgroundPosition: 'right'
    }
  },
   btn1: {
     backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)'
   },
  
})

export default function Button_Regis() {
  const classes = useStyles()
  return (
    
      <div className={classes.container}>
        <Button className={ `${classes.btn} ${classes.btn1}` }>Đăng ký</Button>
      </div>
    
  )
}