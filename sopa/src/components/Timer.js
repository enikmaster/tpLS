import {useEffect, useState} from 'react';


function Timer(props) {
  const [timer, setTimer] = useState(100);
  
  
  let timerID;
 

  //timer
  useEffect(() => {
    if (props.gameStarted) {
      timerID = setInterval(() => {
        setTimer(timer-1);
        }
      , 1000);
    if (timer == 0){
      props.setGameStarted(false)
      setTimer(100)
    }
    }
    else {
      setTimer(100)
    }
    return() => {
      clearInterval(timerID)
    }
  })


return (
  <div >Timer: {timer}</div>
)

}


export default Timer;