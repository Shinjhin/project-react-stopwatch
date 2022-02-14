import Stopwatch from "./components/Stopwatch/Stopwatch";
import Button from "./components/Button/Button";
import React, {useState} from "react";
import Container from "./components/Container/Container";

function App() {

  const [time, setTime] = useState({h: 0, m: 0, s:0, ms:.0});
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  }

  const pause = () => {
    clearInterval(interv);
  }

  const reset = () =>{
    clearInterval(interv)
    return setTime({h: 0, m: 0, s: 0, ms: 0})
  }

  let updateH = time.h, 
  updateM = time.m,
  updateS= time.s,
  updateMs = time.ms;

  const run = () => {
    if(updateM === 60){
      updateH ++;
      updateM = 0;
    }
    if(updateS === 60){
      updateM ++;
      updateS =0
    }
    if(updateMs === 100){
      updateS ++;
      updateMs = 0
    }
    updateMs++;
    return setTime({h: updateH, m: updateM, s: updateS, ms: updateMs})
  }

  return (
    <Container>

     <Stopwatch time={time}/>
     <Button start={start} pause={pause}  reset={reset}/>

    </Container>
  )
}

export default App;