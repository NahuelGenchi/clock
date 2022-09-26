import { useState } from "react";

const Time = () => {
  const [time, setTime] = useState({});

  setInterval(
    function(){
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      setTime({hours, minutes, seconds});
    }, 1000
  );

  return(
    <p>{time?.hours} : {time?.minutes} : {time?.seconds < 10 ? `0${time?.seconds}` : time?.seconds}</p>
  );
};

export default Time;