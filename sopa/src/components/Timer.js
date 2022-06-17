import {useEffect, useState} from 'react';

const [timer, setTimerHandler] = useState(100);

function Timer() {
    
  useEffect(() => {
      if (gameStarted) {
         let timerId = setInterval(() => {
          let nextTimer;
          setTimerHandler((previousState) => {
            console.log('acabou de passar um segundo')
            nextTimer = previousState - 1;
            return nextTimer;
          });

        if (nextTimer === 0) {
          setGameStarted(false);

        }
        }, 1000);
    } else if (timer !== 100) {
      setTimerHandler(100);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);
      
}
export default Timer;