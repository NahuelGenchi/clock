import { useState } from "react";

const Time = () => {
  const [time, setTime] = useState({});

  setInterval(
    function(){
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTime({hours, minutes, seconds, timezone});
    }, 1000
  );

  return(
    <>
      <p className="tc-timezone">{time?.timezone}</p>
      <p>{time?.hours} : {time?.minutes} : {time?.seconds < 10 ? `0${time?.seconds}` : time?.seconds}</p>
    </>
  );
};

export default Time;