import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

const App = () =>{
    let now = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(now)

    const updateTime = ()=>{
        
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
        // console.log("time :",newTime);
    }

    setInterval(updateTime, 1000)

    return(
        <div>
            <h2>{cTime}</h2>
        {/* <button onClick={updateTime}>Now</button> */}
        </div>
    );
}

export default App;